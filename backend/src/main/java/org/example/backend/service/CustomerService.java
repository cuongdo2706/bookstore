package org.example.backend.service;

import org.example.backend.dto.request.CreateCustomerRequest;
import org.example.backend.dto.request.FilterCustomerRequest;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CustomerService {
    Customer findById(Long id) throws DataNotFoundException;
    PageResponse<CustomerResponse> searchCustomer(FilterCustomerRequest filter);
    CustomerResponse save(CreateCustomerRequest request, MultipartFile file) throws IOException, DataNotFoundException;
}