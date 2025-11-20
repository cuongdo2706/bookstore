package org.example.backend.repository;

import org.example.backend.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {

    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_customer
            WHERE is_active = TRUE
            AND is_deleted = FALSE
            ORDER BY created_at DESC 
            """)
    Page<Customer> findAllPage(Pageable pageable);

    boolean existsByCode(String code);

    @Modifying
    @Query(nativeQuery = true, value = "UPDATE tbl_customer SET is_deleted = true WHERE id = :id")
    void softDelete(@Param("id") Long id);
}
