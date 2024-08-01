package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
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
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,unique = true)
    private String code;

    private String name;

    @Column(name = "public_id")
    private String publicId;

    @Column(name = "img_url")
    private String imgUrl;

    private Integer quantity;

    @Column(name = "default_price", precision = 19, scale = 2)
    private BigDecimal defaultPrice;

    @Column(name = "sell_price", precision = 19, scale = 2)
    private BigDecimal sellPrice;

    private String publisher;

    private String translator;

    @Column(name = "num_of_pages")
    private Integer numOfPages;

    @Column(name = "published_year")
    private Integer publishedYear;




    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_author")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "is_active",columnDefinition = "boolean default true")
    private Boolean isActive;

    @Column(name = "is_deleted", columnDefinition = "boolean default false")
    private Boolean isDeleted;
}
