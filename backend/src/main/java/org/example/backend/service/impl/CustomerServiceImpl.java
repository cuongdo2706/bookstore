package org.example.backend.service.impl;

import org.example.backend.dto.request.CreateCustomerRequest;
import org.example.backend.dto.response.ImageResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.CustomerMapper;
import org.example.backend.repository.CustomerRepository;
import org.example.backend.service.CustomerService;
import org.example.backend.service.ImageService;
import org.example.backend.service.SequenceService;
import org.example.backend.specification.UserSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;
    private final ImageService imageService;
    private final SequenceService sequenceService;

    public CustomerServiceImpl(CustomerRepository customerRepository,
                               CustomerMapper customerMapper,
                               ImageService imageService,
                               SequenceService sequenceService) {
        this.customerRepository = customerRepository;
        this.customerMapper = customerMapper;
        this.imageService = imageService;
        this.sequenceService = sequenceService;
    }

    @Override
    public Customer findById(Long id) throws DataNotFoundException {
        return customerRepository.findById(id).orElseThrow(() -> new DataNotFoundException("User Not Found"));
    }

    @Override
    public PageResponse<CustomerResponse> findAllByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortBy) {
        if (page < 0) page = 0;
        Page<Customer> customers;
        if (keyword.isEmpty() && sortBy.equals("name-asc")) {
            Pageable pageable = PageRequest.of(page, size);
            customers = customerRepository.findAllPage(pageable);
        } else {
            Specification<Customer> spec = UserSpecification.findByNameOrPhoneNum(keyword);
            Sort sort = null;
            switch (sortBy) {
                case "created-at-desc" -> sort = Sort.by(Sort.Direction.DESC, "createdAt");
                case "name-asc" -> sort = Sort.by(Sort.Direction.ASC, "name");
                case "name-desc" -> sort = Sort.by(Sort.Direction.DESC, "name");
                default -> sort = Sort.by(Sort.Direction.ASC, "createdAt");
            }
            Pageable pageable = PageRequest.of(page, size, sort);
            customers = customerRepository.findAll(spec, pageable);
        }
        return new PageResponse<>(
                customerMapper.toCustomerResponses(customers.getContent()),
                customers.getNumber(),
                customers.getSize(),
                customers.getTotalElements(),
                customers.getTotalPages()
        );
    }

    @Override
    public CustomerResponse save(CreateCustomerRequest request, MultipartFile file) throws IOException {
        ImageResponse imageResponse = null;
        if (file != null && !file.isEmpty()) {
            imageResponse = imageService.upload(file);
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

        Customer customer=Customer.builder()
                .code(customerCode)
                .name(request.getName())
                .dob(request.getDob())
                .gender(request.getGender())
                .phoneNum(request.getPhoneNum())

                .build();
        return null;
    }


}
