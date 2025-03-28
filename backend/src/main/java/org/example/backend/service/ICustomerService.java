package org.example.backend.service;

import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.example.backend.exception.DataNotFoundException;

public interface ICustomerService {
    Customer findById(Long id) throws DataNotFoundException;

    PageResponse<CustomerResponse> findByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortInput);
}
