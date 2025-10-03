package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.SQLRestriction;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@Builder
@Entity
@Table(name = "tbl_author")
@SQLRestriction("is_deleted = 0")
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
public class Author extends BaseEntity {
    String name;
    @Builder.Default
    Boolean isDeleted = false;
    @ManyToMany(mappedBy = "authors")
    Set<Product> products;
}
