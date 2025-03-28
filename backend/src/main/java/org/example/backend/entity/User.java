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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

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

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    Cart cart;


}
