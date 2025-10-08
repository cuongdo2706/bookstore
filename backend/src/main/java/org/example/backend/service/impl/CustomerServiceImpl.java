package org.example.backend.service.impl;

import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.CustomerMapper;
import org.example.backend.repository.CustomerRepository;
import org.example.backend.service.CustomerService;
import org.example.backend.specification.UserSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;

    public CustomerServiceImpl(CustomerRepository customerRepository,
                               CustomerMapper customerMapper) {
        this.customerRepository = customerRepository;
        this.customerMapper=customerMapper;
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


}
