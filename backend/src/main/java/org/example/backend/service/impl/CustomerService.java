package org.example.backend.service.impl;

import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.CustomerMapper;
import org.example.backend.repository.CustomerRepository;
import org.example.backend.service.ICustomerService;
import org.example.backend.spec.UserSpec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Customer findById(Long id) throws DataNotFoundException {
        return customerRepository.findById(id).orElseThrow(() -> new DataNotFoundException("User Not Found"));
    }

    @Override
    public PageResponse<CustomerResponse> findByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortInput) {
        if (page < 0) page = 0;
        Page<Customer> customers;
        if (keyword.isEmpty() && sortInput.equals("name-asc")) {
            Pageable pageable = PageRequest.of(page, size);
            customers = customerRepository.findAllPage(pageable);
        } else {
            Specification<Customer> spec = UserSpec.findByNameOrPhoneNum(keyword);
            Sort sort = null;
            switch (sortInput) {
                case "created-at-desc" -> sort = Sort.by(Sort.Direction.DESC, "createdAt");
                case "name-asc" -> sort = Sort.by(Sort.Direction.ASC, "name");
                case "name-desc" -> sort = Sort.by(Sort.Direction.DESC, "name");
                default -> sort = Sort.by(Sort.Direction.ASC, "createdAt");
            }
            Pageable pageable = PageRequest.of(page, size, sort);
            customers = customerRepository.findAll(spec, pageable);
        }
        return new PageResponse<>(
                CustomerMapper.toCustomerResponses(customers.getContent()),
                customers.getNumber(),
                customers.getSize(),
                customers.getTotalElements(),
                customers.getTotalPages()
        );
    }


}
