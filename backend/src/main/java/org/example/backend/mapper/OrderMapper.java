package org.example.backend.mapper;

import org.example.backend.dto.response.OrderResponse;
import org.example.backend.entity.Order;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {
    public OrderResponse toOrderOfflineResponse(Order order) {
        return new OrderResponse(
                order.getCode(),
                order.getOrderAt(),
                order.getTotalAmount(),
                order.getAmountPaid(),
                order.getCustomer().getName(),
                order.getStaff().getName(),
                order.getOrderDetails(),
                order.getIsOnline(),
                order.getNote()
        );
    }
}
