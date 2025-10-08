package org.example.backend.mapper;

import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.entity.Customer;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;
@Mapper(componentModel = "spring")
public interface CustomerMapper {
    CustomerResponse toCustomerResponse(Customer customer);
    List<CustomerResponse> toCustomerResponses(List<Customer> customers);
}
