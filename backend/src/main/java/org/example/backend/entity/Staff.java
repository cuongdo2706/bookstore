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

@Entity
@Table(name = "tbl_staff")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Staff extends BaseEntity  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String code;

    String name;

    LocalDate dob;

    Boolean gender;

    @Column(name = "identity_num")
    String identityNum;

    String address;

    @Column(name = "phone_num")
    String phoneNum;

    String email;

    String status;

    @OneToOne(mappedBy = "staff")
    User user;

    @Column(name = "is_active", columnDefinition = "boolean default true")
    Boolean isActive;

    @Column(name = "is_deleted", columnDefinition = "boolean default false")
    Boolean isDeleted;
}
