package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.example.backend.dto.response.ProductResponse;
import org.hibernate.annotations.SQLRestriction;

import java.math.BigDecimal;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_product")
@SQLRestriction("is_deleted = FALSE")
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Product extends BaseEntity {
    @Column(nullable = false, unique = true)
    String code;
    String name;
    String publicId;
    String imgUrl;
    Integer quantity;
    @Column(precision = 19, scale = 2)
    BigDecimal price;
    String publisher;
    String translator;
    Integer numOfPages;
    Integer publishedYear;
    @Column(columnDefinition = "TEXT")
    String description;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(
            name = "tbl_product_author",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "author_id")
    )
    Set<Author> authors;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(
            name = "tbl_product_category",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    Set<Category> categories;

    @ManyToOne
    @JoinColumn(name = "promotion_id")
    Promotion promotion;
    @Column(columnDefinition = "boolean default true")
    Boolean isActive;
    @Column(columnDefinition = "boolean default false")
    Boolean isDeleted;
}
