package org.example.backend.service.impl;

import org.example.backend.dto.request.OfflineOrderRequest;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.entity.*;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.OrderMapper;
import org.example.backend.repository.OrderRepository;
import org.example.backend.service.*;
import org.example.backend.utility.GenerateCodeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private ProductService productService;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private StaffService staffService;
    @Autowired
    private CouponService couponService;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderMapper orderMapper;

    @Override
    public OrderResponse placeOrderOffline(OfflineOrderRequest request) throws DataNotFoundException, DataConflictException {
        Customer existedCustomer = request.getCustomerId() != null ? customerService.findById(request.getCustomerId()) : null;
        Staff existedStaff = staffService.findByUsername(request.getStaffUsername());
        List<OrderDetail> newOrderDetails = new ArrayList<>();
        Set<Long> productIds = request.getOrderItems().stream().map(OfflineOrderRequest.OrderItem::getProductId).collect(Collectors.toSet());

        Map<Long, Product> productMap = productService
                .findAllByIds(productIds)
                .stream()
                .collect(Collectors.toMap(Product::getId, p -> p));
        BigDecimal totalAmountCount = BigDecimal.ZERO;
        for (OfflineOrderRequest.OrderItem item : request.getOrderItems()) {
            Product existedProduct = productMap.get(item.getProductId());
            if (existedProduct == null) {
                throw new DataNotFoundException("Product not found");
            }
            if (item.getQuantity() > existedProduct.getQuantity()) {
                throw new DataConflictException("Stock is not enough");
            }
            BigDecimal totalPrice = existedProduct.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()));
            totalAmountCount = totalAmountCount.add(totalPrice);
            newOrderDetails.add(
                    OrderDetail
                            .builder()
                            .product(existedProduct)
                            .productCode(existedProduct.getCode())
                            .productName(existedProduct.getName())
                            .quantity(item.getQuantity())
                            .price(existedProduct.getPrice())
                            .totalPrice(totalPrice)
                            .build());
        }

        BigDecimal discount = BigDecimal.ZERO;
        BigDecimal amountDue;
        Coupon coupon = null;
        if (request.getCouponId() != null) {
            coupon = couponService.useCoupon(request.getCouponId(), totalAmountCount);
            discount = couponService.calculateDiscount(coupon, totalAmountCount);
            amountDue = totalAmountCount.subtract(discount);
        } else {
            amountDue = totalAmountCount;
        }

        BigDecimal amountPaid = request.getAmountPaid();
        if (amountPaid.compareTo(amountDue) < 0) {
            throw new DataConflictException("Amount paid must greater than or equal amount due");
        }
        BigDecimal changeAmount = amountPaid.subtract(amountDue);
        Order newOrder = Order
                .builder()
                .totalAmount(totalAmountCount)
                .discount(discount)
                .amountDue(amountDue)
                .code(GenerateCodeUtil.generateOrderCode())
                .orderAt(LocalDateTime.now())
                .amountPaid(amountPaid)
                .changeAmount(changeAmount)
                .customer(existedCustomer)
                .staff(existedStaff)
                .paymentMethod(request.getPaymentMethod())
                .saleChannel((short) 0)
                .orderType((short) 0)
                .paymentStatus((short) 1)
                .orderStatus((short) 6)
                .build();
        for (OrderDetail orderDetail : newOrderDetails) {
            orderDetail.setOrder(newOrder);
        }
        newOrder.setOrderDetails(newOrderDetails);
        return orderMapper.toOrderResponse(orderRepository.save(newOrder));
    }
}
