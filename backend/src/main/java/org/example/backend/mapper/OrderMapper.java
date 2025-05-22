package org.example.backend.mapper;

import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.Customer;
import org.example.backend.entity.Order;
import org.example.backend.entity.Staff;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;

@Component
public class OrderMapper {
    public OrderResponse toOrderResponse(Order order) {
        Customer customer = order.getCustomer();
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
        return new OrderResponse(
                order.getCode(),
                order.getOrderAt(),
                order.getDeliveryFee(),
                order.getTotalAmount(),
                order.getDiscount(),
                order.getAmountDue(),
                order.getAmountPaid(),
                order.getChangeAmount(),
                Objects.equals(customer, null) ? null : CustomerMapper.toCustomerResponse(customer),
                order.getCustomerName(),
                order.getEmail(),
                order.getPhoneNum(),
                order.getAddress(),
                StaffMapper.toStaffResponse(order.getStaff()),
                orderDetailResponses,
                order.getNote(),
                order.getPaymentStatus(),
                order.getOrderStatus(),
                order.getSaleChannel(),
                order.getOrderType()
        );
    }
}
