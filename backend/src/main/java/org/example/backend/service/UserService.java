package org.example.backend.service;

import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;

public interface UserService {
    User findByUsername(String username) throws DataNotFoundException;
}
