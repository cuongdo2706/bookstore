package org.example.backend.mapper;

import org.example.backend.dto.response.OrderOfflineResponse;
import org.example.backend.entity.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {
    public OrderOfflineResponse toOrderOfflineResponse(Order order) {
        return new OrderOfflineResponse(
                order.getCode(),
                order.getOrderAt(),
                order.getTotalPrice(),
                order.getTotalReceive(),
                order.getCustomer().getName(),
                order.getStaff().getName(),
                order.getOrderDetails(),
                order.getOrderType(),
                order.getNote()
        );
    }
}
