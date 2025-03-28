package org.example.backend.service;

import org.example.backend.entity.Staff;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IStaffService {
    Staff findById(@Param("id") Long id) throws DataNotFoundException;
}
