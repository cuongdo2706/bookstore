package org.example.backend.service.impl;

import org.example.backend.constant.OrderConstant;
import org.example.backend.dto.request.OrderOfflineRequest;
import org.example.backend.dto.response.OrderOfflineResponse;
import org.example.backend.entity.Order;
import org.example.backend.entity.OrderDetail;
import org.example.backend.entity.Product;
import org.example.backend.entity.User;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.OrderMapper;
import org.example.backend.repository.OrderRepository;
import org.example.backend.service.IUserService;
import org.example.backend.service.IOrderService;
import org.example.backend.service.IProductService;
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
    private IUserService customerService;
    @Autowired
    private OrderRepository orderRepo;
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public OrderOfflineResponse placeOrderOffline(OrderOfflineRequest request) throws DataNotFoundException {
//        BigDecimal totalAmountCount = BigDecimal.ZERO;
//        Staff existedStaff = staffService.findById(request.getStaffId());
//        Order newOrder = new Order();
//        newOrder.setCode(GenerateCodeUtil.generateOrderCode());
//        newOrder.setOrderAt(LocalDateTime.now());
//        newOrder.setTotalAmount(request.getAmountPaid());
//        for (OrderOfflineRequest.OrderItem item : request.getOrderItems()) {
//            OrderDetail orderDetail = new OrderDetail();
//            Product existedProduct = productService.findById(item.getProductId());
//            BigDecimal totalPrice = existedProduct.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()));
//            orderDetail.setProduct(existedProduct);
//            orderDetail.setProductCode(existedProduct.getCode());
//            orderDetail.setProductName(existedProduct.getName());
//            orderDetail.setPrice(existedProduct.getPrice());
//            orderDetail.setQuantity(item.getQuantity());
//            orderDetail.setTotalPrice(totalPrice);
//            totalAmountCount = totalAmountCount.add(totalPrice);
//            newOrder.getOrderDetails().add(orderDetail);
//        }
//        newOrder.setTotalAmount(totalAmountCount);
//        if (request.getCustomerId() != null) {
//            User existedUser = customerService.findById(request.getCustomerId());
//            newOrder.setUser(existedUser);
//        }
//        newOrder.setStaff(existedStaff);
//        newOrder.setOrderType(OrderConstant.OrderType.OFFLINE);
//        newOrder.setNote(request.getNote());
//        return orderMapper.toOrderOfflineResponse(orderRepo.save(newOrder));
        return null;
    }
}
