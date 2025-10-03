package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_promotion")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Promotion extends BaseEntity {
    @Column(nullable = false, unique = true)
    String code;
    String name;
    @Column(columnDefinition = "TEXT")
    String description;
    LocalDate startDate;
    LocalDate endDate;
    /*
    0 - FIXED
    1 - PERCENT
     */
    Short promotionType;
    @Column(precision = 19, scale = 2)
    BigDecimal promotionValue;
    @Column(precision = 19, scale = 2)
    BigDecimal minAmount;
    @Column(precision = 19, scale = 2)
    BigDecimal maxDiscount; //số tiền được giảm tối đa
    @Builder.Default
    Boolean isActive = true;
    @Builder.Default
    Boolean isDeleted = false;
}
