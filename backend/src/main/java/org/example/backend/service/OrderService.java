package org.example.backend.service;

import org.example.backend.dto.request.CreateOrderRequest;
import org.example.backend.dto.request.FilterOrderRequest;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.entity.Order;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;

import java.util.List;

public interface OrderService {
    List<Order> findAll();

    List<OrderResponse> findAllOrderResponse();

    void updateOrderStatus(Short oldStatus, Short newStatus, Long orderId) throws DataNotFoundException;

    OrderResponse create(CreateOrderRequest request, String token) throws DataNotFoundException, DataConflictException;

    PageResponse<OrderResponse> searchOrder(FilterOrderRequest request);

    OrderResponse findOrderResponseById(Long id) throws DataNotFoundException;

    Order findById(Long id) throws DataNotFoundException;


}
