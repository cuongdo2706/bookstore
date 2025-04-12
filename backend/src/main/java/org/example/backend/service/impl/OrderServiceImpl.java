package org.example.backend.service.impl;

import org.example.backend.dto.request.OrderRequest;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.OrderMapper;
import org.example.backend.repository.OrderRepository;
import org.example.backend.service.CouponService;
import org.example.backend.service.CustomerService;
import org.example.backend.service.ProductService;
import org.example.backend.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements org.example.backend.service.OrderService {
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
    public OrderResponse placeOrder(OrderRequest request) throws DataNotFoundException, DataConflictException {
//        Customer existedCustomer = request.getCustomerId() != null ? customerService.findById(request.getCustomerId()) : null;
//        Staff existedStaff = staffService.findById(request.getStaffId());
//        List<OrderDetail> newOrderDetails = new ArrayList<>();
//        List<Long> productIds = request.getOrderItems().stream().map(OrderOfflineRequest.OrderItem::getProductId).toList();
//
//        Map<Long, Product> productMap = productService.findAllById(productIds).stream().collect(Collectors.toMap(Product::getId, p -> p));
//        BigDecimal totalAmountCount = BigDecimal.ZERO;
//        for (OrderOfflineRequest.OrderItem item : request.getOrderItems()) {
//            Product existedProduct = productMap.get(item.getProductId());
//            if (existedProduct == null) {
//                throw new DataNotFoundException("Product not found");
//            }
//            if (item.getQuantity() > existedProduct.getQuantity()) {
//                throw new DataConflictException("Stock is not enough");
//            }
//            BigDecimal totalPrice = existedProduct.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()));
//            totalAmountCount = totalAmountCount.add(totalPrice);
//            newOrderDetails.add(OrderDetail.builder().product(existedProduct).quantity(item.getQuantity()).price(existedProduct.getPrice()).totalPrice(totalPrice).build());
//        }
//
//        BigDecimal discount = BigDecimal.ZERO;
//        BigDecimal amountDue;
//        Coupon coupon = null;
//        if (request.getCouponId() != null) {
//            coupon = couponService.useCoupon(request.getCouponId(), totalAmountCount);
//            discount = couponService.calculateDiscount(coupon, totalAmountCount);
//            amountDue = totalAmountCount.subtract(discount);
//        } else {
//            amountDue = totalAmountCount;
//        }
//
//        BigDecimal amountPaid = request.getAmountPaid();
//        if (amountPaid.compareTo(amountDue) < 0) {
//            throw new DataConflictException("Amount paid must greater than or equal amount due");
//        }
//        BigDecimal changeAmount = amountPaid.subtract(amountDue);
//        Order newOrder = Order.builder().totalAmount(totalAmountCount).discount(discount).amountDue(amountDue).code(GenerateCodeUtil.generateOrderCode()).orderAt(LocalDateTime.now()).orderDetails(newOrderDetails).amountPaid(amountPaid).changeAmount(changeAmount).customer(existedCustomer).staff(existedStaff).isOnline(Boolean.FALSE).build();
//        return orderMapper.toOrderOfflineResponse(orderRepo.save(newOrder));
        return null;
    }
}
