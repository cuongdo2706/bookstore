package org.example.backend.dto.response;

import java.time.LocalDate;

public record CustomerResponse(
        Long id,
        String code,
        String name,
        LocalDate dob,
        Boolean gender,
        String phoneNum,
        String address,
        String email,
        Boolean isActive
) {

}
