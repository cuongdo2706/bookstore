package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;


import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_order")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Order extends BaseEntity {
    @Column(nullable = false, unique = true)
    String code;

    LocalDateTime orderedAt;

    String invoiceNumber;
    LocalDateTime invoiceDate;

    @Column(precision = 19, scale = 2)
    BigDecimal deliveryFee; //online

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    List<OrderDetail> orderDetails;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    List<OrderStatusLog> orderStatusLogs;

    @Column(precision = 19, scale = 2)
    BigDecimal subTotal;//Tổng tiền hàng

    @Column(precision = 19, scale = 2)
    BigDecimal discount;

    @Column(precision = 19, scale = 2)
    BigDecimal grandTotal;//Tiền khách phải trả

    @Column(precision = 19, scale = 2) //Tiền khách trả
    BigDecimal amountPaid;//offline

    @Column(precision = 19, scale = 2)
    BigDecimal changeAmount;//offline

    @ManyToOne
    @JoinColumn(name = "customer_id")
    Customer customer;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    Staff staff;

    @OneToOne(mappedBy = "order", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    DeliveryInfo deliveryInfo;

    @Column(columnDefinition = "TEXT")
    String note;//online

    @ManyToOne
    @JoinColumn(name = "coupon_id")
    Coupon coupon;

    /*
    0 - CASH
    1 - BANK TRANSFER
    2 - CREDIT/DEBIT CARD
     */
    Short paymentMethod;

    /*
    0 - POS
    1- ONLINE
    */
    Short saleChannel;

    /*
    0 - POS
    1 - ONLINE
    */
    Boolean orderType;

    /*
    0 - UNPAID
    1 - PAID
    */
    Short paymentStatus;

    /*
    0 - NEW (Đơn vừa được tạo mới bởi khách và chưa được xử lý)
    1 - PROCESSING (Đang xử lý bởi nhân viên)
    2 - SHIPPED (Đơn đã giao cho bên vận chuyển và đang được gửi đi)
    3 - DELIVERED (Khách đã nhận được đơn)
    4 - CANCELLED (Huỷ đơn bởi người bán hoặc người mua) -- DỪNG LUỒNG
    5 - COMPLETED (Hoàn thành đơn) -- DỪNG LUỒNG
    */
    Short orderStatus;
}
