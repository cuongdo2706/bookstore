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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(nullable = false, unique = true)
    String code;
    LocalDateTime orderAt;
    LocalDateTime paymentAt;  //online order
    LocalDateTime deliveredAt; //online order
    @Column(precision = 19, scale = 2)
    BigDecimal deliveryFee; //online order
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    List<OrderDetail> orderDetails;
    @Column(precision = 19, scale = 2)
    BigDecimal totalAmount;//Tổng tiền hàng
    @Column(precision = 19, scale = 2)
    BigDecimal discount;
    @Column(precision = 19, scale = 2)
    BigDecimal amountDue;//Tiền khách phải trả
    @Column(precision = 19, scale = 2) //Tiền khách trả
    BigDecimal amountPaid;//offline
    @Column(precision = 19, scale = 2)
    BigDecimal changeAmount;//offline
    @ManyToOne
    @JoinColumn(name = "customer_id")
    User customer;
    @ManyToOne
    @JoinColumn(name = "staff_id")
    User staff;
    String customerName;//online
    String email;//online
    String phoneNum;//online
    String address;// online
    String orderType;
    @Column(columnDefinition = "TEXT")
    String note;//online
    @ManyToOne
    @JoinColumn(name = "voucher_id")
    Voucher voucher;
    String status;// online
}
