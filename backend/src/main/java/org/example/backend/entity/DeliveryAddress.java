package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "tbl_delivery_address")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DeliveryAddress extends BaseEntity {
    String name;
    String phoneNum;
    String address;
    String province;
    String commune;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    Customer customer;
}
