package org.example.backend.controller;

import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping("/customer/{id}")
    public SuccessResponse<User> findCustomerById(@PathVariable("id") Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", userService.findCustomerById(id));
    }

    @GetMapping("/staff/{id}")
    public SuccessResponse<User> findStaffById(@PathVariable("id") Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", userService.findStaffById(id));
    }
}
