package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;

@Entity
@Builder
@Table(name = "tbl_order_status_log")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderStatusLog extends BaseEntity {
    Short status;
    LocalDateTime confirmAt;
    String confirmBy;

    @ManyToOne
    @JoinColumn(name = "order_id")
    Order order;
}
