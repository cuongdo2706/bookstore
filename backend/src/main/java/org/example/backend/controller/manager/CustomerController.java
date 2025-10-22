package org.example.backend.controller.manager;

import jakarta.validation.Valid;
import org.example.backend.dto.request.CreateCustomerRequest;
import org.example.backend.dto.request.FilterCustomerRequest;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("customer")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/search")
    public SuccessResponse<PageResponse<CustomerResponse>> findByCodeOrPhoneNum(@Valid @RequestBody FilterCustomerRequest request) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", customerService.searchCustomer(request));
    }

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public SuccessResponse<CustomerResponse> createCustomer(@Valid @RequestPart(value = "customer") CreateCustomerRequest request,
                                                            @RequestPart(value = "file", required = false) MultipartFile file) throws DataNotFoundException, IOException {
        return new SuccessResponse<>(HttpStatus.CREATED.value(), "Save data success", customerService.save(request, file));
    }

}
