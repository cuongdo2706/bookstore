package org.example.backend.mapper;

import org.example.backend.dto.response.StaffResponse;
import org.example.backend.entity.Staff;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StaffMapper {
    StaffResponse toStaffResponse(Staff staff);
}
