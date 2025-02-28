package org.example.backend.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.PositiveOrZero;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.dto.response.UserResponse;
import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping("/customer/search")
    public SuccessResponse<PageResponse<UserResponse>> findCustomerByCodeOrPhoneNum(@Valid @RequestParam(defaultValue = "0", name = "page") @PositiveOrZero(message = "Page must be greater than or equal 0") Integer page,
                                                                                    @Valid @RequestParam(defaultValue = "10", name = "size") @PositiveOrZero(message = "Size must be greater than or equal 0") Integer size,
                                                                                    @RequestParam(defaultValue = "", name = "keyword") String keyword,
                                                                                    @RequestParam(defaultValue = "created-at-desc", name = "sort") String sort) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", userService.findCustomerByNameOrPhoneNum(page,size,keyword,sort));
    }

    @GetMapping("/staff/{keyword}")
    public SuccessResponse<User> findStaffById(@PathVariable("keyword") String keyword) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", userService.findStaffByNameOrPhoneNum(keyword));
    }
}
