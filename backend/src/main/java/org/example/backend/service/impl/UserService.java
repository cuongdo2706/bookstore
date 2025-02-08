package org.example.backend.service.impl;

import org.example.backend.constant.RoleConstant;
import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepo;

    @Override
    public User findCustomerByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortInput) throws DataNotFoundException {
        if (page < 0) page = 0;
        if (keyword.isEmpty() && sortInput.equals("name-asc")) {
            Pageable pageable = PageRequest.of(page, size);
            Page<User>user=userRepo.findAllPageCustomer(pageable);
        }
        return userRepo.findCustomerByNameOrPhoneNum(keyword).orElseThrow(() -> new DataNotFoundException("Customer Not Found"));
    }

    @Override
    public User findStaffByNameOrPhoneNum(String keyword) throws DataNotFoundException {
        return userRepo.findStaffByNameOrPhoneNum(keyword).orElseThrow(() -> new DataNotFoundException("Staff Not Found"));
    }
}
