package org.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Entity
@Builder
@Table(name = "tbl_order_detail")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @ManyToOne
    @JoinColumn(name = "product_id")
    Product product;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "order_id")
    Order order;
    //thông tin snapshot
    String productCode;
    String productName;
    @Column(precision = 19, scale = 2)
    BigDecimal price;
    Integer quantity;
    @Column(precision = 19, scale = 2)
    BigDecimal totalPrice;
}
