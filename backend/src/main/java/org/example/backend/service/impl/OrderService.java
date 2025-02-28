package org.example.backend.service.impl;

import org.example.backend.constant.OrderConstant;
import org.example.backend.dto.request.OrderOfflineRequest;
import org.example.backend.dto.response.OrderOfflineResponse;
import org.example.backend.entity.*;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.OrderMapper;
import org.example.backend.repository.OrderRepository;
import org.example.backend.service.IUserService;
import org.example.backend.service.IOrderService;
import org.example.backend.service.IProductService;
import org.example.backend.service.IVoucherService;
import org.example.backend.utility.GenerateCodeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IProductService productService;
    @Autowired
    private IUserService userService;
    @Autowired
    private IVoucherService voucherService;
    @Autowired
    private OrderRepository orderRepo;
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public OrderOfflineResponse placeOrderOffline(OrderOfflineRequest request) throws DataNotFoundException, DataConflictException {
        Order newOrder = new Order();
        List<OrderDetail> newOrderDetails = new ArrayList<>();
        BigDecimal totalAmountCount = BigDecimal.ZERO;
        User existedCustomer = userService.findUserById(request.getCustomerId());
        User existedStaff = userService.findUserById(request.getStaffId());
        for (OrderOfflineRequest.OrderItem item : request.getOrderItems()) {
            Product existedProduct = productService.findById(item.getProductId());
            if (item.getPrice().compareTo(existedProduct.getPrice()) != 0) {
                throw new DataConflictException("Giá có sự thay đổi");
            }
            if (item.getQuantity() > existedProduct.getQuantity()) {
                throw new DataConflictException("Số lượng trong kho không còn đủ");
            }
            BigDecimal totalPrice = existedProduct.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()));
            totalAmountCount = totalAmountCount.add(totalPrice);
            OrderDetail orderDetail = OrderDetail.builder()
                    .product(existedProduct)
                    .quantity(item.getQuantity())
                    .price(existedProduct.getPrice())
                    .totalPrice(totalPrice)
                    .build();
            newOrderDetails.add(orderDetail);
        }
        newOrder.setTotalAmount(totalAmountCount);
        BigDecimal discount = BigDecimal.ZERO;
        BigDecimal amountDue = BigDecimal.ZERO;
        if (request.getVoucherId() != null) {
            Voucher voucher = voucherService.useVoucher(request.getVoucherId(), totalAmountCount);
            discount = voucherService.calculateDiscount(voucher, totalAmountCount);
            amountDue = totalAmountCount.subtract(discount);
            newOrder.setVoucher(voucher);
            newOrder.setDiscount(discount);
            newOrder.setAmountDue(amountDue);
        } else {
            amountDue = totalAmountCount;
            newOrder.setVoucher(null);
            newOrder.setDiscount(discount);
            newOrder.setAmountDue(amountDue);
        }
        BigDecimal amountPaid = request.getAmountPaid();
        if (amountPaid.compareTo(amountDue) < 0) {
            throw new DataConflictException("Amount paid must greater than or equal amount due");
        }
        BigDecimal changeAmount = amountPaid.subtract(amountDue);
        newOrder.setCode(GenerateCodeUtil.generateOrderCode());
        newOrder.setOrderAt(LocalDateTime.now());
        newOrder.setOrderDetails(newOrderDetails);
        newOrder.setAmountPaid(amountPaid);
        newOrder.setChangeAmount(changeAmount);
        newOrder.setCustomer(existedCustomer);
        newOrder.setStaff(existedStaff);
        newOrder.setOrderType(OrderConstant.OrderType.OFFLINE);
        return orderMapper.toOrderOfflineResponse(orderRepo.save(newOrder));
    }
}
