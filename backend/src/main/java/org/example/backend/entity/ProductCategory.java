package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Table(name = "tbl_product_category")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "category_id")
    Category category;

    @ManyToOne
    @JoinColumn(name = "product_id")
    Product product;
}
