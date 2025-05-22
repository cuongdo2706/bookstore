package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Entity
@Table(name = "tbl_cart")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Cart extends BaseEntity {
    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    User user;

    @Column(precision = 19, scale = 2)
    BigDecimal totalPrice;
}
