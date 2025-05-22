package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_category")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Category extends BaseEntity {
    String name;
    Boolean isDeleted;
    @ManyToMany(mappedBy = "categories")
    Set<Product> products;
}
