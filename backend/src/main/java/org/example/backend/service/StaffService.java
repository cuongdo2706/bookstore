package org.example.backend.service;

import org.example.backend.entity.Staff;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.data.repository.query.Param;

public interface StaffService {
    Staff findById(Long id) throws DataNotFoundException;

    Staff findByUsername(String username) throws DataNotFoundException;
}
