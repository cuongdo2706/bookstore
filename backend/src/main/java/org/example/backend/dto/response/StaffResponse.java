package org.example.backend.dto.response;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record StaffResponse(
        Long id,
        String code,
        String name,
        LocalDate dob,
        Boolean gender,
        String phoneNum,
        String address,
        String email,
        String identityNum,
        String imgUrl,
        Boolean isActive,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
