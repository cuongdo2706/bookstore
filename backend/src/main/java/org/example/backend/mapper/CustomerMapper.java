package org.example.backend.mapper;

import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;

import java.util.List;
import java.util.stream.Collectors;

public class CustomerMapper {
    public static CustomerResponse toCustomerResponse(Customer customer) {
        return new CustomerResponse(
                customer.getId(),
                customer.getCode(),
                customer.getName(),
                customer.getDob(),
                customer.getGender(),
                customer.getPhoneNum(),
                customer.getAddress(),
                customer.getEmail(),
                customer.getPublicId(),
                customer.getImgUrl(),
                customer.getIsActive());
    }

    public static List<CustomerResponse> toCustomerResponses(List<Customer> customers) {
        return customers.stream().map(CustomerMapper::toCustomerResponse).collect(Collectors.toList());
    }
}
