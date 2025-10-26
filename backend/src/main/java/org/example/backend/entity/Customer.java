package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.SQLRestriction;

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
@SQLRestriction("is_deleted = false")
public class Customer extends BaseEntity {
    @Column(nullable = false, unique = true)
    String code;
    String name;
    LocalDate dob;
    Boolean gender;
    @Column(unique = true, columnDefinition = "varchar(10)")
    String phoneNum;

    @ManyToOne
    @JoinColumn(name = "province_id", referencedColumnName = "code")
    Province province;

    @ManyToOne
    @JoinColumn(name = "commune_id", referencedColumnName = "code")
    Commune commune;

    String address;
    @Column(unique = true)
    String email;
    String publicId;
    String imgUrl;
    @Builder.Default
    Boolean isActive = true;
    @Builder.Default
    Boolean isDeleted = false;
    @OneToOne(mappedBy = "customer", cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    User user;
}
