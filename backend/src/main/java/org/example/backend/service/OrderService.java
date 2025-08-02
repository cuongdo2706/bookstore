package org.example.backend.service;

import org.example.backend.dto.request.OrderCreatedRequest;
import org.example.backend.dto.request.OrderFilterRequest;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.entity.Order;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;

import java.util.List;

public interface OrderService {
    List<Order> findAll();

    List<OrderResponse> findAllOrderResponse();

    OrderResponse create(OrderCreatedRequest request, String token) throws DataNotFoundException, DataConflictException;

    PageResponse<OrderResponse> searchOrder(OrderFilterRequest request);

    OrderResponse findOrderResponseById(Long id) throws DataNotFoundException;

    Order findById(Long id) throws DataNotFoundException;
}
