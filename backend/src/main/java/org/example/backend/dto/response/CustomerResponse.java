package org.example.backend.dto.response;

import org.example.backend.entity.Province;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record CustomerResponse(
        Long id,
        String code,
        String name,
        LocalDate dob,
        Boolean gender,
        String phoneNum,
        Province province,
        String address,
        String email,
        String imgUrl,
        Boolean isActive,
        ImageResponse image,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {

}
