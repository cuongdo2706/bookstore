package org.example.backend.service.impl;

import org.example.backend.entity.Customer;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.CustomerRepository;
import org.example.backend.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private CustomerRepository customerRepo;

    @Override
    public Customer findById(Long id) throws DataNotFoundException {
        return customerRepo.findById(id).orElseThrow(()->new DataNotFoundException("Customer Not Found"));
    }
}
