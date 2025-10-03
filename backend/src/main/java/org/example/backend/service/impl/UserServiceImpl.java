package org.example.backend.service.impl;

import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User findByUsername(String username) throws DataNotFoundException {
        return userRepository.findByUsername(username).orElseThrow(() -> new DataNotFoundException("Username not found"));
    }
}
