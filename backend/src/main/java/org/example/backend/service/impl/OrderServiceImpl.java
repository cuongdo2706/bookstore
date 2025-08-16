package org.example.backend.service.impl;

import org.example.backend.dto.request.OrderCreatedRequest;
import org.example.backend.dto.request.OrderFilterRequest;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.entity.*;
import org.example.backend.exception.DataConflictException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.jwt.JwtTokenProvider;
import org.example.backend.mapper.OrderMapper;
import org.example.backend.repository.OrderRepository;
import org.example.backend.service.*;
import org.example.backend.specification.OrderSpecification;
import org.example.backend.utility.GenerateCodeUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {
    private static final String createOrderUrl = "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create";
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
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private Environment env;

    //    RestTemplate restTemplate = new RestTemplate();

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public List<OrderResponse> findAllOrderResponse() {
        return OrderMapper.toOrderResponses(findAll());
    }

    @Override
    public void updateOrderStatus(Short oldStatus, Short newStatus, Long orderId) throws DataNotFoundException {
        Order order = findById(orderId);
        order.setOrderStatus(newStatus);
        order.getOrderStatusLogs().add(new OrderStatusLog(newStatus, LocalDateTime.now(), order.getStaff().getName(), order));
    }

    @Transactional
    @Override
    public OrderResponse create(OrderCreatedRequest request, String token) throws DataNotFoundException, DataConflictException {
        LocalDateTime createdDate = LocalDateTime.now();
        //GEN CODE CHO ORDER
        String code = GenerateCodeUtil.generateOrderCode();
        //LẤY CUSTOMER
        Customer existedCustomer = request.getCustomerId() != null ? customerService.findById(request.getCustomerId()) : null;
        //LẤY STAFF
        Staff existedStaff = staffService.findByUsername(request.getStaffUsername());
        //LIST ĐỂ ADD CÁC ORDER DETAIL VÀO ORDER
        List<OrderDetail> newOrderDetails = new ArrayList<>();
        //LẤY RA ID[] TỪ REQUEST
        Set<Long> productIds = request.getOrderItems().stream().map(OrderCreatedRequest.OrderItem::getProductId).collect(Collectors.toSet());
        // DÙNG MẢNG ID[] ĐỂ QUERY GET PRODUCTS
        Map<Long, Product> productMap = productService.findAllByIds(productIds).stream().collect(Collectors.toMap(Product::getId, p -> p));
        BigDecimal subTotalCount = BigDecimal.ZERO;
        //DUYỆT ORDER ITEMS TỪ REQUEST DTO, ADD ORDER DETAIL
        for (OrderCreatedRequest.OrderItem item : request.getOrderItems()) {
            Product existedProduct = productMap.get(item.getProductId());
            BigDecimal discount = BigDecimal.ZERO;
            if (existedProduct == null) {
                throw new DataNotFoundException("Product not found");
            }
            if (item.getQuantity() > existedProduct.getQuantity()) {
                throw new DataConflictException("Stock is not enough");
            }

            BigDecimal totalPrice = existedProduct.getPrice().subtract(discount).multiply(BigDecimal.valueOf(item.getQuantity()));
            subTotalCount = subTotalCount.add(totalPrice);
            newOrderDetails.add(OrderDetail.builder().product(existedProduct).discount(discount).productCode(existedProduct.getCode()).productName(existedProduct.getName()).quantity(item.getQuantity()).price(existedProduct.getPrice()).totalPrice(totalPrice).build());
        }

        BigDecimal discount = BigDecimal.ZERO;
        BigDecimal grandTotal;
        Coupon coupon;
        if (request.getCouponId() != null) {
            coupon = couponService.useCoupon(request.getCouponId(), subTotalCount);
            discount = couponService.calculateDiscount(coupon, subTotalCount);
            grandTotal = subTotalCount.subtract(discount);
        } else {
            grandTotal = subTotalCount;
        }
        String role = jwtTokenProvider.getRole(token);
        short saleChannel = (role.equals("ROLE_ADMIN") || role.equals("ROLE_CASHIER")) && (request.getOrderType() != null)
                ? (short) 0 : 1;


        Order newOrder = Order.builder().
                orderedAt(createdDate).
                subTotal(subTotalCount).
                discount(discount).
                grandTotal(grandTotal).
                code("DH" + code).
                customer(existedCustomer).
                staff(existedStaff).
                orderStatusLogs(new ArrayList<>()).
                paymentMethod(request.getPaymentMethod()).
                saleChannel(saleChannel).
                orderType(request.getOrderType()).
                paymentStatus((short) 1).
                build();

        newOrder.getOrderStatusLogs().add(new OrderStatusLog((short) 0, createdDate, existedStaff.getName(), newOrder));
        //Nếu là đơn mua tại quầy
        if (saleChannel == 0 && request.getOrderType() == false) {
            BigDecimal amountPaid = request.getAmountPaid();
            if (amountPaid.compareTo(grandTotal) < 0) {
                throw new DataConflictException("Amount paid must greater than or equal amount due");
            }
            newOrder.setInvoiceNumber(code);
            newOrder.setInvoiceDate(LocalDateTime.now());
            newOrder.getOrderStatusLogs().add(new OrderStatusLog((short) 5, LocalDateTime.now(), existedStaff.getName(), newOrder));
            BigDecimal changeAmount = amountPaid.subtract(grandTotal);
            newOrder.setAmountPaid(amountPaid);
            newOrder.setChangeAmount(changeAmount);
            newOrder.setOrderStatus((short) 5);
        }
        for (OrderDetail orderDetail : newOrderDetails) {
            orderDetail.setOrder(newOrder);
            int newQuantity = orderDetail.getProduct().getQuantity() - orderDetail.getQuantity();
            if (newQuantity < 0) {
                throw new DataConflictException("Stock is not enough for product " + orderDetail.getProduct().getName());
            }
            orderDetail.getProduct().setQuantity(newQuantity);
        }
        productService.saveAll(new ArrayList<>(productMap.values()));
        newOrder.setOrderDetails(newOrderDetails);
        return OrderMapper.toOrderResponse(orderRepository.save(newOrder));
    }

    @Override
    public PageResponse<OrderResponse> searchOrder(OrderFilterRequest filter) {
        Specification<Order> spec = Specification.unrestricted();
        if (!Objects.equals(filter.getOrderType(), null)) {
            spec = spec.and(OrderSpecification.orderTypeEqual(filter.getOrderType()));
        }
        if (!filter.getOrderStatus().isEmpty()) {
            spec = spec.and(OrderSpecification.hasOrderStatus(filter.getOrderStatus()));
        }
        if (!Objects.equals(filter.getOrderCodeKeyword(), null) && !filter.getOrderCodeKeyword().isBlank()) {
            spec = spec.and(OrderSpecification.orderCodeContains(filter.getOrderCodeKeyword()));
        }
        Sort sort = switch (filter.getSortBy()) {
            case "ord" -> Sort.by(Sort.Direction.ASC, "orderedAt");
            case "ord-d" -> Sort.by(Sort.Direction.DESC, "orderedAt");
            default -> throw new RuntimeException("Sort pattern not valid: " + filter.getSortBy());
        };
        Pageable pageable = PageRequest.of(filter.getPage() - 1, filter.getSize(), sort);
        Page<Order> orders = orderRepository.findAll(spec, pageable);
        return new PageResponse<>(OrderMapper.toOrderResponses(orders.getContent()), orders.getNumber(), orders.getSize(), orders.getTotalElements(), orders.getTotalPages());
    }

    @Override
    public OrderResponse findOrderResponseById(Long id) throws DataNotFoundException {
        return OrderMapper.toOrderResponse(findById(id));
    }

    @Override
    public Order findById(Long id) throws DataNotFoundException {
        return orderRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Không tìm thấy order với id: " + id));
    }


}
