package org.example.backend.service;

import org.example.backend.entity.Staff;
import org.example.backend.exception.DataNotFoundException;

public interface IStaffService {
    Staff findById(Long id) throws DataNotFoundException;
}
