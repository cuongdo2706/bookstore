package org.example.backend.mapper;

import org.example.backend.dto.response.OfflineOrderResponse;
import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.Order;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Component
public class OrderMapper {
    public OfflineOrderResponse toOfflineOrderResponse(Order order) {
        List<OrderDetailResponse> orderDetailResponses = order
                .getOrderDetails()
                .stream()
                .map(item -> new OrderDetailResponse(
                        item.getId(),
                        item.getProduct().getId(),
                        item.getProductCode(),
                        item.getProductName(),
                        item.getPrice(),
                        item.getQuantity(),
                        item.getTotalPrice()
                ))
                .toList();
        return new OfflineOrderResponse(
                order.getCode(),
                order.getOrderAt(),
                order.getTotalAmount(),
                order.getAmountPaid(),
                Objects.equals(order.getCustomer(), null) ? "Khách lẻ" : order.getCustomer().getName(),
                order.getStaff().getName(),
                orderDetailResponses,
                order.getOrderType(),
                order.getNote()
        );
    }
}
