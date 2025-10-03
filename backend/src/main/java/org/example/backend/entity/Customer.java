package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "tbl_customer")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Customer extends BaseEntity {
    @Column(nullable = false, unique = true)
    String code;
    String name;
    LocalDate dob;
    Boolean gender;
    String phoneNum;
    String address;
    String email;
    String publicId;
    String imgUrl;
    @Builder.Default
    Boolean isActive=true;
    @Builder.Default
    Boolean isDeleted=false;
    @OneToOne(mappedBy = "customer", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    User user;
}
