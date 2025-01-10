package org.example.backend.service;

import org.example.backend.entity.Customer;
import org.example.backend.exception.DataNotFoundException;

public interface ICustomerService {
    Customer findById(Long id) throws DataNotFoundException;
}
