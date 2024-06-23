package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

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

    @Column(name = "status", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean status;

    private String description;

    @ManyToOne
    @JoinColumn(name = "id_author")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
