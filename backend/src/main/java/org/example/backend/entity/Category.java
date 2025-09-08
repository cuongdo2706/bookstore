package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.SQLRestriction;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_category")
@SQLRestriction("is_deleted = 0")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Category extends BaseEntity {
    String name;
    @Column(columnDefinition = "default 0")
    Boolean isDeleted;
    @ManyToMany(mappedBy = "categories")
    Set<Product> products;
}
