package org.example.backend.service.impl;

import org.example.backend.entity.Staff;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.StaffRepository;
import org.example.backend.service.IStaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class StaffService implements IStaffService {
    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Staff findById(Long id) throws DataNotFoundException {
        return staffRepository.findByIdNotDeleted(id).orElseThrow(() -> new DataNotFoundException("Staff Not Found"));
    }
}
