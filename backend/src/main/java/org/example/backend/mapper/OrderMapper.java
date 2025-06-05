package org.example.backend.mapper;

import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.Customer;
import org.example.backend.entity.Order;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;

public class OrderMapper {
    public static OrderResponse toOrderResponse(Order order) {
        Customer customer = order.getCustomer();
        return new OrderResponse(
                order.getCode(),
                order.getExpiredAt(),
                order.getOrderedAt(),
                order.getProcessedAt(),
                order.getShippedAt(),
                order.getDeliveredAt(),
                order.getCancelledAt(),
                order.getCompletedAt(),
                order.getDeliveryFee(),
                order.getSubTotal(),
                order.getDiscount(),
                order.getGrandTotal(),
                order.getAmountPaid(),
                order.getChangeAmount(),
                Objects.equals(customer, null) ? null : CustomerMapper.toCustomerResponse(customer),
                order.getCustomerName(),
                order.getEmail(),
                order.getPhoneNum(),
                order.getAddress(),
                StaffMapper.toStaffResponse(order.getStaff()),
                null,
                order.getNote(),
                order.getPaymentStatus(),
                order.getOrderStatus(),
                order.getSaleChannel(),
                order.getOrderType()
        );
    }

    public static List<OrderResponse> toOrderResponses(List<Order> orders) {
        return orders
                .stream()
                .map(OrderMapper::toOrderResponse)
                .toList();
    }
}
