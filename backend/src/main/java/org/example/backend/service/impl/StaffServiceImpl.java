package org.example.backend.service.impl;

import org.example.backend.entity.Staff;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.StaffRepository;
import org.example.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class StaffServiceImpl implements StaffService {
    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Staff findById(Long id) throws DataNotFoundException {
        return staffRepository.findByIdNotDeleted(id).orElseThrow(() -> new DataNotFoundException("Staff Not Found"));
    }

    @Override
    public Staff findByUsername(String username) throws DataNotFoundException {
        return staffRepository.findByUsername(username).orElseThrow(() -> new DataNotFoundException("Staff Not Found"));
    }
}
