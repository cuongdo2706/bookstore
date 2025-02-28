package org.example.backend.service.impl;

import org.example.backend.constant.RoleConstant;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.UserResponse;
import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.UserMapper;
import org.example.backend.repository.UserRepository;
import org.example.backend.service.IUserService;
import org.example.backend.spec.UserSpec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepo;

    @Override
    public User findUserById(Long id) throws DataNotFoundException {
        return userRepo.findUserById(id).orElseThrow(() -> new DataNotFoundException("User Not Found"));
    }

    @Override
    public PageResponse<UserResponse> findCustomerByNameOrPhoneNum(Integer page, Integer size, String keyword, String sortInput) {
        if (page < 0) page = 0;
        Page<User> user;
        if (keyword.isEmpty() && sortInput.equals("name-asc")) {
            Pageable pageable = PageRequest.of(page, size);
            user = userRepo.findAllPageCustomer(pageable);
            return new PageResponse<>(
                    UserMapper.toUserResponses(user.getContent()),
                    user.getNumber(),
                    user.getSize(),
                    user.getTotalElements(),
                    user.getTotalPages());
        }
        Specification<User> spec = UserSpec.findByNameOrPhoneNum(keyword);
        Sort sort = null;
        switch (sortInput) {
            case "created-at-desc" -> sort = Sort.by(Sort.Direction.DESC, "createdAt");
            case "name-asc" -> sort = Sort.by(Sort.Direction.ASC, "name");
            case "name-desc" -> sort = Sort.by(Sort.Direction.DESC, "name");
            default -> sort = Sort.by(Sort.Direction.ASC, "createdAt");
        }
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<User> users = userRepo.findAll(spec, pageable);
        return new PageResponse<>(
                UserMapper.toUserResponses(users.getContent()),
                users.getNumber(),
                users.getSize(),
                users.getTotalElements(),
                users.getTotalPages()
        );
    }

    @Override
    public User findStaffByNameOrPhoneNum(String keyword) {
        return null;
    }
}
