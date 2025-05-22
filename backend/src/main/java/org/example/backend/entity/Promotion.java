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
    String promotionType;
    @Column(precision = 19, scale = 2)
    BigDecimal promotionValue;
    @Column(columnDefinition = "BOOLEAN DEFAULT TRUE")
    Boolean isActive;
}
