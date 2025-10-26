package org.example.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.request.CreateCustomerRequest;
import org.example.backend.dto.request.FilterCustomerRequest;
import org.example.backend.dto.response.ImageResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;
    private final ImageService2 imageService2;
    private final SequenceService sequenceService;
    private final CommuneService communeService;
    private final ProvinceService provinceService;

    @Override
    public Customer findById(Long id) throws DataNotFoundException {
        return customerRepository.findById(id).orElseThrow(() -> new DataNotFoundException("User Not Found"));
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
    public CustomerResponse save(CreateCustomerRequest request, MultipartFile file) throws IOException, DataNotFoundException {
        ImageResponse imageResponse = null;
        if (file != null && !file.isEmpty()) {
            imageResponse = imageService2.upload(file);
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
        if (imageResponse != null) {
            customer.setImgUrl(imageResponse.imgUrl());
            customer.setPublicId(imageResponse.publicId());
        }
        if (request.getProvinceCode() != null) {
            if (provinceService.existsByCode(request.getProvinceCode()))
                customer.setProvince(provinceService.getReferenceById(request.getProvinceCode()));
            else
                throw new DataNotFoundException("Không tìm thấy tỉnh thành có mã: " + request.getProvinceCode());
        }
        if (request.getCommuneCode() != null && request.getProvinceCode() != null) {
            if (communeService.existsByCommuneCodeAndProvinceCode(request.getCommuneCode(), request.getProvinceCode())==1)
                customer.setCommune(communeService.getReferenceById(request.getCommuneCode()));
            else
                throw new DataNotFoundException("Không tìm thấy phường xã có mã: " + request.getProvinceCode());
        }
        return customerMapper.toCustomerResponse(customerRepository.save(customer));
    }


}
