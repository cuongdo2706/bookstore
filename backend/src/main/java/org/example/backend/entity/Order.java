package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_order")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, unique = true)
    String code;

    @Column(name = "created_at")
    LocalDateTime createdAt;

    @Column(name = "updated_at")
    LocalDateTime updatedAt;

    @Column(name = "payment_at")
    LocalDateTime paymentAt;

    @Column(name = "delivered_at")
    LocalDateTime deliveredAt;

    @Column(name = "delivery_fee", precision = 19, scale = 2)
    BigDecimal deliveryFee;

    @Column(name = "total_price", precision = 19, scale = 2)
    BigDecimal totalPrice;

    @Column(name = "total_receive", precision = 19, scale = 2)
    BigDecimal totalReceive;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    Customer customer;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    Staff staff;

    @Column(name = "customer_name")
    String customerName;

    String email;

    @Column(name = "phone_num")
    String phoneNum;

    String address;

    @Column(name = "order_type")
    Boolean orderType;

    @Column(columnDefinition = "TEXT")
    String note;

    String status;
}
