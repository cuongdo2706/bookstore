package org.example.backend.repository;

import jakarta.persistence.LockModeType;
import lombok.NonNull;
import org.example.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_product 
            WHERE is_active = TRUE 
            AND is_deleted = FALSE
            ORDER BY name
            """,
    countQuery = "SELECT count(*) FROM tbl_product WHERE is_active = TRUE AND is_deleted = FALSE "
    )
    Page<Product> findAllPage(Pageable pageable);

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
