package org.example.backend.controller.manager;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.example.backend.dto.request.CreateCustomerRequest;
import org.example.backend.dto.request.FilterCustomerRequest;
import org.example.backend.dto.request.UpdateCustomerRequest;
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
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/{id}")
    public SuccessResponse<CustomerResponse> findById(@PathVariable Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", customerService.findDtoById(id));
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

    @PutMapping(value = "/{id}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public SuccessResponse<CustomerResponse> updateCustomer(@PathVariable Long id,
                                                            @Valid @RequestPart(value = "customer") UpdateCustomerRequest request,
                                                            @RequestPart(value = "file", required = false) MultipartFile file) throws DataNotFoundException, IOException {
        return new SuccessResponse<>(HttpStatus.ACCEPTED.value(), "Update data success", customerService.update(id, request, file));
    }

    @DeleteMapping("/{id}")
    public SuccessResponse<?> deleteById(@Valid @NotNull(message = "Id must not be null") @PathVariable Long id) throws DataNotFoundException {
        customerService.softDelete(id);
        return new SuccessResponse<>(HttpStatus.NO_CONTENT.value(), "Deleting data success", null);
    }
    @PatchMapping("/{id}/change-status")
    public SuccessResponse<?>changeStatus(@Valid @NotNull(message = "Id must not be null") @PathVariable Long id) throws DataNotFoundException{
        customerService.changeStatus(id);
        return new SuccessResponse<>(HttpStatus.NO_CONTENT.value(), "Change status success", null);
    }
}
