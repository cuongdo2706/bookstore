package org.example.backend.service;

import org.example.backend.entity.Staff;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.data.repository.query.Param;

public interface StaffService {
    Staff findById(@Param("id") Long id) throws DataNotFoundException;
}
