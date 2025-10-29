package org.example.backend.repository;

import org.example.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface ProductRepository extends
        JpaRepository<Product, Long>,
        JpaSpecificationExecutor<Product> {

    @EntityGraph(attributePaths = {"authors", "categories", "promotion","publisher"})
    List<Product> findAll();

    @EntityGraph(attributePaths = {"authors", "categories", "promotion","publisher","image"})
    Page<Product> findAll(Specification<Product> spec, Pageable pageable);

    @EntityGraph(attributePaths = {"authors", "categories", "promotion","publisher","image"})
    Optional<Product> findById(Long id);

    @EntityGraph(attributePaths = {"authors", "categories", "promotion","publisher"})
    List<Product> findAllById(Iterable<Long> ids);

    boolean existsById(Long id);

    @Modifying
    @Query(nativeQuery = true, value = "UPDATE tbl_product SET is_deleted = true WHERE id = :id")
    void softDelete(@Param("id") Long id);


    boolean existsByCode(String code);

    @Query(nativeQuery = true, value = "SELECT quantity FROM tbl_product WHERE id = :id AND is_deleted =false")
    Integer getStockQuantity(@Param("id") Long id);

}
