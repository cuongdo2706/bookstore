package org.example.backend.mapper;

import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.OrderDetail;

import java.util.List;

public class OrderDetailMapper {
    public static OrderDetailResponse toOrderDetailResponse(OrderDetail orderDetail) {
        return new OrderDetailResponse(
                orderDetail.getId(),
                orderDetail.getProduct().getId(),
                orderDetail.getProductCode(),
                orderDetail.getProductName(),
                orderDetail.getPrice(),
                orderDetail.getQuantity(),
                orderDetail.getDiscount(),
                orderDetail.getTotalPrice()
        );
    }

    public static List<OrderDetailResponse> toOrderDetailResponses(List<OrderDetail> orderDetails) {
        return orderDetails.stream()
                .map(OrderDetailMapper::toOrderDetailResponse)
                .toList();
    }
}
