package org.example.backend.dto.response;

import java.time.LocalDateTime;

public record DeliveryInfoResponse(String recipientName,
                                   String email,
                                   String phoneNum,
                                   String address,
                                   LocalDateTime createdAt,
                                   LocalDateTime updatedAt
) {
}
