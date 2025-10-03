package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.SQLRestriction;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tbl_publisher")
@SQLRestriction("is_deleted = 0")
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
public class Publisher extends BaseEntity{
    String name;
    @Builder.Default
    Boolean isDeleted = false;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "publisher")
    List<Product> products;
}
