package org.example.backend.dto.response;

public record DeliveryInfoResponse(String recipientName,
                                   String email,
                                   String phoneNum,
                                   String address) {
}
