package org.example.backend.mapper;

import org.example.backend.dto.response.DeliveryInfoResponse;
import org.example.backend.entity.DeliveryInfo;

public class DeliveryInfoMapper {
    public static DeliveryInfoResponse toDeliveryInfoResponse(DeliveryInfo deliveryInfo) {
        return new DeliveryInfoResponse(
                deliveryInfo.getRecipientName(),
                deliveryInfo.getEmail(),
                deliveryInfo.getPhoneNum(),
                deliveryInfo.getAddress());
    }
}
