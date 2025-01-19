package org.example.backend.service.impl;

import org.example.backend.constant.RoleConstant;
import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepo;

    @Override
    public User findCustomerById(Long id) throws DataNotFoundException {
        return userRepo.findCustomerById(id, RoleConstant.GUEST).orElseThrow(() -> new DataNotFoundException("Customer Not Found"));
    }

    @Override
    public User findStaffById(Long id) throws DataNotFoundException {
        return userRepo.findStaffById(id,RoleConstant.STAFF).orElseThrow(() -> new DataNotFoundException("Staff Not Found"));
    }
}
