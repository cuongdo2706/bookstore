package org.example.backend.service;

import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;

public interface IUserService {
    User findCustomerById(Long id) throws DataNotFoundException;
    User findStaffById(Long id) throws DataNotFoundException;
}
