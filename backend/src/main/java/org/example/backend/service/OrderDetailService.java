package org.example.backend.service;

import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.OrderDetail;

import java.util.List;

public interface OrderDetailService {
    List<OrderDetailResponse> findByOrderId(Long orderId);

    List<OrderDetail> findAll();
}
