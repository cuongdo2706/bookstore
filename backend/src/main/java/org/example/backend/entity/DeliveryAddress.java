package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "tbl_delivery_address")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DeliveryAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;

    @Column(name = "phone_num")
    String phoneNum;

    String address;

    String province;

    String district;

    String commune;

    @ManyToOne
    @JoinColumn(name = "delivery_address")
    Customer customer;
}
