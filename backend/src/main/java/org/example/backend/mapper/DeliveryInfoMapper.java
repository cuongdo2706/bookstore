package org.example.backend.mapper;

import org.example.backend.dto.response.DeliveryInfoResponse;
import org.example.backend.entity.DeliveryInfo;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DeliveryInfoMapper {
    DeliveryInfoResponse toDeliveryInfoResponse(DeliveryInfo deliveryInfo);
}
