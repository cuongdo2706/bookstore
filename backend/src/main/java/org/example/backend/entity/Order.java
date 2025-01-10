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

    @Column(name = "order_at")
    LocalDateTime orderAt;

    @Column(name = "payment_at")
    LocalDateTime paymentAt;  //online order

    @Column(name = "delivered_at")
    LocalDateTime deliveredAt; //online order

    @Column(name = "delivery_fee", precision = 19, scale = 2)
    BigDecimal deliveryFee; //online order

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    List<OrderDetail> orderDetails;

    @Column(name = "total_price", precision = 19, scale = 2)
    BigDecimal totalPrice;

    @Column(name = "total_receive", precision = 19, scale = 2)
    BigDecimal totalReceive;//offline

    @ManyToOne
    @JoinColumn(name = "customer_id")
    Customer customer;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    Staff staff;

    @Column(name = "customer_name")
    String customerName;//online

    String email;//online

    @Column(name = "phone_num")
    String phoneNum;//online

    String address;// online

    @Column(name = "order_type")
    String orderType;

    @Column(columnDefinition = "TEXT")
    String note;

    String status;// online
}
