package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "tbl_customer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Customer extends BaseEntity  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String code;

    String name;

    LocalDate dob;

    Boolean gender;

    @Column(name = "phone_num")
    String phoneNum;

    String address;

    String email;

    String status;

    @OneToOne(mappedBy = "customer")
    User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_id")
    Cart cart;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    List<DeliveryAddress> deliveryAddresses;

    @Column(name = "is_active", columnDefinition = "boolean default true")
    Boolean isActive;

    @Column(name = "is_deleted", columnDefinition = "boolean default false")
    Boolean isDeleted;
}
