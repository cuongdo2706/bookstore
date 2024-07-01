package org.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_delivery_address")
public class DeliveryAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "phone_num")
    private String phoneNum;

    private String address;

    private String province;

    private String district;

    private String commune;

    @ManyToOne
    @JoinColumn(name = "delivery_address")
    private Customer customer;
}
