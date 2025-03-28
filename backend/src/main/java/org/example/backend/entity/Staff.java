package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "tbl_staff")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Staff extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(nullable = false, unique = true)
    String code;
    String name;
    LocalDate dob;
    Boolean gender;
    @Column(unique = true)
    String phoneNum;
    @Column(unique = true)
    String address;
    String email;
    String identityNum;
    String publicId;
    String imgUrl;
    @Column(columnDefinition = "boolean default true")
    Boolean isActive;
    @Column(columnDefinition = "boolean default false")
    Boolean isDeleted;
}
