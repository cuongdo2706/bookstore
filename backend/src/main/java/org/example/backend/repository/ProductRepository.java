package org.example.backend.repository;

import jakarta.persistence.Tuple;
import org.example.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;


public interface ProductRepository extends
        JpaRepository<Product, Long>,
        JpaSpecificationExecutor<Product> {

    @EntityGraph(attributePaths = {"authors", "categories", "promotion"})
    List<Product> findAll();

    @EntityGraph(attributePaths = {"authors", "categories", "promotion"})
    Page<Product> findAll(Specification<Product> spec, Pageable pageable);

    @EntityGraph(attributePaths = {"authors", "categories", "promotion"})
    @Query(value = """
                        SELECT p FROM Product p
                        WHERE p.id = :id
                        AND p.isDeleted = FALSE
            """)
    Optional<Product> findByIdNotDeleted(@Param("id") Long id);

    @EntityGraph(attributePaths = {"authors", "categories", "promotion"})
    @Query(value = """
                    SELECT p FROM Product p
                    WHERE p.id IN :ids AND p.isDeleted = FALSE 
            """)
    List<Product> findAllByIds(@Param("ids") Set<Long> ids);

    @Query(nativeQuery = true, value = """
                    SELECT EXISTS(
                        SELECT * FROM tbl_product
                        WHERE id = :id
                        AND is_deleted = FALSE
                                    )
            """)
    Boolean existedByIdNotDeleted(@Param("id") Long id);



    @Modifying
    @Query(nativeQuery = true, value = "UPDATE tbl_product SET is_deleted = true WHERE id = :id")
    void softDelete(@Param("id") Long id);

    boolean existsByCode(String code);

    @Query(nativeQuery = true, value = "SELECT quantity FROM tbl_product WHERE id = :id")
    Integer getStockQuantity(@Param("id") Long id);

}
