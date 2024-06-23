package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
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
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String code;

    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "payment_at")
    private LocalDateTime paymentAt;

    @Column(name = "delivered_at")
    private LocalDateTime deliveredAt;

    @Column(name = "delivery_fee", precision = 19, scale = 2)
    private BigDecimal deliveryFee;

    @Column(name = "total_price", precision = 19, scale = 2)
    private BigDecimal totalPrice;

    @Column(name = "total_receive", precision = 19, scale = 2)
    private BigDecimal totalReceive;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "walkin_customer_id",nullable = true)
    private WalkinCustomer walkinCustomer;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User customer;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private User staff;

    @Column(name = "order_type")
    private Boolean orderType;

    private String note;

    private String status;
}
