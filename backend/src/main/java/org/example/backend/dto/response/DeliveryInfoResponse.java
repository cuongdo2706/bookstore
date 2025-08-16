package org.example.backend.dto.response;

public record DeliveryInfoResponse(String customerName,
                                   String email,
                                   String phoneNum,
                                   String address) {
}
