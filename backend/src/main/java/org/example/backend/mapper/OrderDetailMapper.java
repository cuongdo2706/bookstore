package org.example.backend.mapper;

import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.OrderDetail;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderDetailMapper {
    @Mapping(target = "productId", source = "product.id")
    OrderDetailResponse toOrderDetailResponse(OrderDetail orderDetail);

    List<OrderDetailResponse> toOrderDetailResponses(List<OrderDetail> orderDetails);
}
