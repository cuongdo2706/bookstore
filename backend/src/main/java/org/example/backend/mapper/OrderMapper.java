package org.example.backend.mapper;

import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.Customer;
import org.example.backend.entity.DeliveryInfo;
import org.example.backend.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;

@Mapper(componentModel = "spring",
        uses = {
                CustomerMapper.class,
                StaffMapper.class,
                DeliveryInfoMapper.class
        })
public interface OrderMapper {
    @Mapping(target = "orderDetails",ignore = true)
    @Mapping(target = "orderStatusLogs",ignore = true)
    OrderResponse toOrderResponse(Order order);

    List<OrderResponse> toOrderResponses(List<Order> orders);
}
