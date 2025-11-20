package org.example.backend.service.impl;

import jakarta.persistence.OptimisticLockException;
import lombok.RequiredArgsConstructor;
import org.example.backend.dto.request.CreateCustomerRequest;
import org.example.backend.dto.request.FilterCustomerRequest;
import org.example.backend.dto.request.UpdateCustomerRequest;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.example.backend.entity.Image;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.CustomerMapper;
import org.example.backend.repository.CustomerRepository;
import org.example.backend.service.*;
import org.example.backend.specification.CustomerSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;
    private final ImageService imageService;
    private final SequenceService sequenceService;
    private final ProvinceService provinceService;
    private static final String CUSTOMER_DEFAULT_PATH = "customer";

    @Override
    public Customer findById(Long id) throws DataNotFoundException {
        return customerRepository.findById(id).orElseThrow(() -> new DataNotFoundException("User Not Found"));
    }

    @Override
    public CustomerResponse findDtoById(Long id) throws DataNotFoundException {
        return customerMapper.toCustomerResponse(findById(id));
    }

    @Override
    public PageResponse<CustomerResponse> searchCustomer(FilterCustomerRequest filter) {
        Specification<Customer> spec = Specification.unrestricted();
        if (!Objects.equals(filter.getSearchKeyword(), null) && !filter.getSearchKeyword().isBlank())
            spec = spec.and(CustomerSpecification.nameOrCodeOrPhoneNumContains(filter.getSearchKeyword()));
        if (!Objects.equals(filter.getIsActive(), null))
            spec = spec.and(CustomerSpecification.isActive(filter.getIsActive()));
        Sort sort = switch (filter.getSortBy()) {
            case "name" -> Sort.by(Sort.Direction.ASC, "name");
            case "name-d" -> Sort.by(Sort.Direction.DESC, "name");
            case "cre-at" -> Sort.by(Sort.Direction.ASC, "createdAt");
            case "cre-at-d" -> Sort.by(Sort.Direction.DESC, "createdAt");
            default -> throw new RuntimeException("Mục sắp xếp không hợp lệ: " + filter.getSortBy());
        };
        Pageable pageable = PageRequest.of(filter.getPage() - 1, filter.getSize(), sort);
        Page<Customer> customers = customerRepository.findAll(spec, pageable);
        return new PageResponse<>(
                customerMapper.toCustomerResponses(customers.getContent()),
                customers.getNumber(),
                customers.getSize(),
                customers.getTotalElements(),
                customers.getTotalPages()
        );
    }

    @Override
    @Transactional
    public CustomerResponse save(CreateCustomerRequest request, MultipartFile file) throws IOException, DataNotFoundException {
        Image image = null;
        if (file != null && !file.isEmpty()) {
            image = imageService.upload(file, CUSTOMER_DEFAULT_PATH);
        }
        String customerCode = null;
        if (request.getCode() == null || request.getCode().isBlank())
            customerCode = sequenceService.generateCustomerCode();
        else {
            if (customerRepository.existsByCode(request.getCode())) {
                throw new DataExistedException("Mã này đã tồn tại, hãy dùng mã khác");
            }
            customerCode = request.getCode();
        }

        Customer customer = Customer.builder()
                .code(customerCode)
                .name(request.getName())
                .dob(request.getDob())
                .gender(request.getGender())
                .phoneNum(request.getPhoneNum())
                .address(request.getAddress())
                .email(request.getEmail())
                .build();
        if (image != null) {
            customer.setImage(image);
        }
        if (request.getProvinceCode() != null) {
            if (provinceService.existsByCode(request.getProvinceCode()))
                customer.setProvince(provinceService.getReferenceById(request.getProvinceCode()));
            else
                throw new DataNotFoundException("Không tìm thấy tỉnh thành có mã: " + request.getProvinceCode());
        }
        return customerMapper.toCustomerResponse(customerRepository.save(customer));
    }

    @Override
    public CustomerResponse update(Long id, UpdateCustomerRequest request, MultipartFile file) throws IOException, DataNotFoundException {
        Customer existedCus = findById(id);
        if (request.getCode() != null) {
            if (customerRepository.existsByCode(request.getCode())) {
                throw new DataExistedException("Mã này đã tồn tại, hãy dùng mã khác");
            }
            existedCus.setCode(request.getCode());
        }
        if (request.getName() != null) existedCus.setName(request.getName());
        existedCus.setGender(request.getGender());
        existedCus.setDob(request.getDob());
        existedCus.setPhoneNum(request.getPhoneNum());
        if (request.getProvinceCode() != null) {
            if (provinceService.existsByCode(request.getProvinceCode()))
                existedCus.setProvince(provinceService.getReferenceById(request.getProvinceCode()));
            else
                throw new DataNotFoundException("Không tìm thấy tỉnh thành có mã: " + request.getProvinceCode());
        } else existedCus.setProvince(null);
        existedCus.setEmail(request.getEmail());
        existedCus.setAddress(request.getAddress());
        if (file != null && !file.isEmpty()) {
            if (existedCus.getImage() != null) {
                imageService.update(file, existedCus.getImage());
            } else {
                existedCus.setImage(imageService.upload(file, CUSTOMER_DEFAULT_PATH));
            }
        }
        try {
            return customerMapper.toCustomerResponse(customerRepository.save(existedCus));
        } catch (OptimisticLockException e) {
            throw new OptimisticLockException("Khách hàng đã được cập nhật bởi một người dùng khác, hãy thử lại");
        }
    }

    @Override
    @Transactional
    public void softDelete(Long id) throws DataNotFoundException {
        if (!customerRepository.existsById(id)) throw new DataNotFoundException("Không tìm thấy khách hàng");
        customerRepository.softDelete(id);
    }


}
