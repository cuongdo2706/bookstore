package org.example.backend.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.PositiveOrZero;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.dto.response.CustomerResponse;
import org.example.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/search")
    public SuccessResponse<PageResponse<CustomerResponse>> findByCodeOrPhoneNum(@Valid @RequestParam(defaultValue = "0", name = "page") @PositiveOrZero(message = "Page must be greater than or equal 0") Integer page,
                                                                                @Valid @RequestParam(defaultValue = "10", name = "size") @PositiveOrZero(message = "Size must be greater than or equal 0") Integer size,
                                                                                @RequestParam(defaultValue = "", name = "keyword") String keyword,
                                                                                @RequestParam(defaultValue = "created-at-desc", name = "sort") String sort) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", customerService.findAllByNameOrPhoneNum(page, size, keyword, sort));
    }

}
