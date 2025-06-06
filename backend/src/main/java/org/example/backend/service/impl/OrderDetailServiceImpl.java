package org.example.backend.service.impl;

import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.mapper.OrderDetailMapper;
import org.example.backend.repository.OrderDetailRepository;
import org.example.backend.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Override
    public List<OrderDetailResponse> findByOrderId(Long orderId) {
        return OrderDetailMapper.toOrderDetailResponses(orderDetailRepository.findByOrderId(orderId));
    }
}
