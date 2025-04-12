package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.example.backend.dto.response.ProductResponse;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_product")
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Product extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
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
    @ManyToOne
    @JoinColumn(name = "author_id")
    Author author;
    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;
    @ManyToOne
    @JoinColumn(name = "promotion_id")
    Promotion promotion;
    @Column(columnDefinition = "boolean default true")
    Boolean isActive;
    @Column(columnDefinition = "boolean default false")
    Boolean isDeleted;
}
