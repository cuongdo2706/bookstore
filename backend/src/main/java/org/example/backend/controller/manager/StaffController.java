package org.example.backend.controller.manager;

import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Staff;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.impl.StaffServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("staff")
public class StaffController {
    @Autowired
    private StaffServiceImpl staffService;

    @GetMapping("/{id}")
    public SuccessResponse<Staff> findById(@PathVariable Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data succeed", staffService.findById(id));
    }
}
