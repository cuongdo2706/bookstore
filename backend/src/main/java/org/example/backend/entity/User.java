package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "tbl_user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String code;
    String name;
    LocalDate dob;
    Boolean gender;
    String phoneNum;
    String address;
    String email;
    String role;

    @OneToOne(mappedBy = "user")
    Account account;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_id")
    Cart cart;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    List<DeliveryAddress> deliveryAddresses;

    @Column(columnDefinition = "boolean default true")
    Boolean isActive;
    @Column(columnDefinition = "boolean default false")
    Boolean isDeleted;
}
