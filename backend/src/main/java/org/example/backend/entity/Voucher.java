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
@Table(name = "tbl_voucher")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Voucher extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String code;
    String name;
    @Column(columnDefinition = "TEXT")
    String description;
    LocalDate startDate;
    LocalDate endDate;
    String promotionType;
    @Column(precision = 19, scale = 2)
    BigDecimal promotionValue;
    Integer quantity;
    @Column(columnDefinition = "INTEGER DEFAULT 0")
    Integer usedCount;
    @Column(columnDefinition = "BOOLEAN DEFAULT TRUE")
    Boolean isActive;
}
