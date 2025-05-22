package org.example.backend.mapper;

import org.example.backend.dto.response.StaffResponse;
import org.example.backend.entity.Staff;

public class StaffMapper {
    public static StaffResponse toStaffResponse(Staff staff) {
        return new StaffResponse(
                staff.getId(),
                staff.getCode(),
                staff.getName(),
                staff.getDob(),
                staff.getGender(),
                staff.getPhoneNum(),
                staff.getAddress(),
                staff.getEmail(),
                staff.getIdentityNum(),
                staff.getPublicId(),
                staff.getImgUrl(),
                staff.getIsActive()
        );
    }
}
