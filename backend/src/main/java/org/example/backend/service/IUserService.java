package org.example.backend.service;

import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;

public interface IUserService {
    User findCustomerByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortInput) throws DataNotFoundException;
    User findStaffByNameOrPhoneNum(String keyword) throws DataNotFoundException;
}
