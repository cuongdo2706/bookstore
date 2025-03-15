package org.example.backend.service;

import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.UserResponse;
import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;

public interface IUserService {
    User findUserById(Long id) throws DataNotFoundException;

    PageResponse<UserResponse> findCustomerByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortInput);

    User findStaffByNameOrPhoneNum(String keyword);

}
