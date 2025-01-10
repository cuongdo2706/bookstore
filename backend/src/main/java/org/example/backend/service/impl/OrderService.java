package org.example.backend.service.impl;

import org.example.backend.constant.OrderTypeConstant;
import org.example.backend.dto.request.OrderOfflineRequest;
import org.example.backend.dto.response.OrderOfflineResponse;
import org.example.backend.entity.*;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.OrderMapper;
import org.example.backend.repository.OrderRepository;
import org.example.backend.service.ICustomerService;
import org.example.backend.service.IOrderService;
import org.example.backend.service.IProductService;
import org.example.backend.service.IStaffService;
import org.example.backend.utility.GenerateCodeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IProductService productService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IStaffService staffService;
    @Autowired
    private OrderRepository orderRepo;
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public OrderOfflineResponse placeOrderOffline(OrderOfflineRequest request) throws DataNotFoundException {
        BigDecimal totalPriceCount = BigDecimal.ZERO;
        Staff existedStaff = staffService.findById(request.getStaffId());
        Order newOrder = new Order();
        newOrder.setCode(GenerateCodeUtil.generateOrderCode());
        newOrder.setOrderAt(LocalDateTime.now());
        newOrder.setTotalReceive(request.getTotalReceive());
        for (OrderOfflineRequest.OrderItem item : request.getOrderItems()) {
            OrderDetail orderDetail = new OrderDetail();
            Product existedProduct = productService.findById(item.getProductId());
            BigDecimal totalPrice = existedProduct.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()));
            orderDetail.setProduct(existedProduct);
            orderDetail.setProductCode(existedProduct.getCode());
            orderDetail.setProductName(existedProduct.getName());
            orderDetail.setPrice(existedProduct.getPrice());
            orderDetail.setQuantity(item.getQuantity());
            orderDetail.setTotalPrice(totalPrice);
            totalPriceCount = totalPriceCount.add(totalPrice);
            newOrder.getOrderDetails().add(orderDetail);
        }
        newOrder.setTotalPrice(totalPriceCount);
        if (request.getCustomerId() != null) {
            Customer existedCustomer = customerService.findById(request.getCustomerId());
            newOrder.setCustomer(existedCustomer);
        }
        newOrder.setStaff(existedStaff);
        newOrder.setOrderType(OrderTypeConstant.OFFLINE);
        newOrder.setNote(request.getNote());
        return orderMapper.toOrderOfflineResponse(orderRepo.save(newOrder));
    }
}
