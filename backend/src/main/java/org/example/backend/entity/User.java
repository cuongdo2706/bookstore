package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "tbl_user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends BaseEntity {
    @Column(nullable = false, unique = true)
    String username;

    @Column(nullable = false)
    String password;

    String role;

    @Column(columnDefinition = "boolean default true")
    Boolean isActive;

    @Column(columnDefinition = "boolean default false")
    Boolean isDeleted;

    @OneToOne
    @JoinColumn(name = "customer_id", unique = true)
    Customer customer;

    @OneToOne
    @JoinColumn(name = "staff_id", unique = true)
    Staff staff;

    @OneToOne(mappedBy = "user", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    Cart cart;


}
