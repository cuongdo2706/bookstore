package org.example.backend.dto.response;

import java.time.LocalDate;

public record StaffResponse(
        Long id,
        String code,
        String username,
        String role,
        String name,
        LocalDate dob,
        Boolean gender,
        String phoneNum,
        String address,
        String email,
        String identityNum,
        String isActive
) {
}
