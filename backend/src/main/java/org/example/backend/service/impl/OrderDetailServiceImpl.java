package org.example.backend.service.impl;

import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.entity.OrderDetail;
import org.example.backend.mapper.OrderDetailMapper;
import org.example.backend.repository.OrderDetailRepository;
import org.example.backend.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {
    private final OrderDetailRepository orderDetailRepository;
    private final OrderDetailMapper orderDetailMapper;

    public OrderDetailServiceImpl(OrderDetailRepository orderDetailRepository,
                                  OrderDetailMapper orderDetailMapper) {
        this.orderDetailRepository = orderDetailRepository;
        this.orderDetailMapper = orderDetailMapper;
    }

    @Override
    public List<OrderDetailResponse> findByOrderId(Long orderId) {
        return orderDetailMapper.toOrderDetailResponses(orderDetailRepository.findByOrderId(orderId));
    }

    @Override
    public List<OrderDetail> findAll() {
        return orderDetailRepository.findAll();
    }
}
