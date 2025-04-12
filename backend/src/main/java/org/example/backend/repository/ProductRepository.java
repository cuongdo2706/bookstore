package org.example.backend.repository;

import org.example.backend.dto.response.ProductResponse;
import org.example.backend.entity.Product;
import org.example.backend.repository.custom.ProductRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface ProductRepository extends
        JpaRepository<Product, Long>,
        JpaSpecificationExecutor<Product>,
        ProductRepositoryCustom {
    @Query(nativeQuery = true, value = """
                        SELECT * FROM tbl_product
                        WHERE id = :id
                        AND is_deleted = FALSE
            """)
    Optional<Product> findByIdNotDeleted(@Param("id") Long id);


    @Query(nativeQuery = true, value = """
            SELECT 
            product.id,
            product.code,
            product.name,
            product.img_url,
            product.quantity,
            product.price,
            product.publisher,
            product.translator,
            product.num_of_pages,
            product.published_year,
            product.is_active,
            product.description,
            author.id,
            author.name, 
            category.id,
            category.name,
            promotion.id, --"index 16"
            promotion.code,
            promotion.name,
            promotion.description,
            promotion.start_date,
            promotion.end_date,
            promotion.promotion_type,
            promotion.promotion_value,
            promotion.is_active
            FROM tbl_product product
            LEFT JOIN tbl_author author ON product.author_id = author.id
            LEFT JOIN tbl_category category ON product.category_id = category.id
            LEFT JOIN tbl_promotion promotion ON product.promotion_id = promotion.id
            WHERE product.is_deleted = FALSE AND product.is_active = TRUE
            """)
    List<Object[]> findAllProduct();




    @Query(nativeQuery = true, value = """
                    SELECT EXISTS(
                        SELECT * FROM tbl_product
                        WHERE id = :id
                        AND is_deleted = FALSE
                                    )
            """)
    Boolean existedByIdNotDeleted(@Param("id") Long id);

    @Query(value = """
            SELECT new org.example.backend.dto.response.ProductResponse(
                        p.id,
                        p.code,
                        p.name,
                        p.imgUrl,
                        p.quantity,
                        p.price,
                        p.publisher,
                        p.translator,
                        p.numOfPages,
                        p.publishedYear,
                        p.isActive,
                        p.description,
                        new org.example.backend.dto.response.AuthorResponse(p.author.id,p.author.name),
                        new org.example.backend.dto.response.CategoryResponse(p.category.id,p.category.name),
                        new org.example.backend.dto.response.PromotionResponse(p.promotion.id,p.promotion.code,p.promotion.name,p.promotion.description,p.promotion.startDate,p.promotion.endDate,p.promotion.promotionType,p.promotion.promotionValue,p.promotion.isActive)
                        )
                        FROM Product p
            """)
    Page<ProductResponse> findAllPage(Specification<Product> spec, Pageable pageable);

//    @Query(nativeQuery = true,
//            value = """
//                    SELECT * FROM tbl_product
//                    WHERE code=:code
//                    AND is_deleted = FALSE
//                    ORDER BY name
//                    """)
//    Product findByCode(@Param("code") String code);


    @Modifying
    @Query(nativeQuery = true, value = "UPDATE tbl_product SET is_deleted = true WHERE id = :id")
    void softDelete(@Param("id") Long id);

    boolean existsByCode(String code);

    @Query(nativeQuery = true, value = "SELECT quantity FROM tbl_product WHERE id = :id")
    Integer getStockQuantity(@Param("id") Long id);

}
