package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "tbl_book")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(nullable = false, unique = true)
    String code;

    String name;

    @Column(name = "public_id")
    String publicId;

    @Column(name = "img_url")
    String imgUrl;

    Integer quantity;

    @Column(name = "default_price", precision = 19, scale = 2)
    BigDecimal defaultPrice;

    @Column(name = "sell_price", precision = 19, scale = 2)
    BigDecimal sellPrice;

    String publisher;

    String translator;

    @Column(name = "num_of_pages")
    Integer numOfPages;

    @Column(name = "published_year")
    Integer publishedYear;


    @Column(columnDefinition = "TEXT")
    String description;

    @ManyToOne
    @JoinColumn(name = "id_author")
    Author author;

    @ManyToOne
    @JoinColumn(name = "id_category")
    Category category;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    LocalDateTime createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    LocalDateTime updatedAt;

    @Column(name = "is_active", columnDefinition = "boolean default true")
    Boolean isActive;

    @Column(name = "is_deleted", columnDefinition = "boolean default false")
    Boolean isDeleted;
}
