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
@SQLRestriction("is_deleted = FALSE")
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
public class Author extends BaseEntity {
    String name;
    @Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
    Boolean isDeleted;
    @ManyToMany(mappedBy = "authors")
    Set<Product> products;
}
