package org.example.backend.service;

import org.example.backend.dto.request.CreateCustomerRequest;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CustomerService {
    Customer findById(Long id) throws DataNotFoundException;
    PageResponse<CustomerResponse> findAllByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortBy);
    CustomerResponse save(CreateCustomerRequest request, MultipartFile file) throws IOException;
}