package org.example.backend.repository;

import org.example.backend.entity.Customer;
import org.example.backend.entity.Staff;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {

    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_customer
            WHERE unaccent(name) ILIKE unaccent(concat('%',:keyword,'%'))
            OR phone_num LIKE concat('%',:keyword,'%')
            AND is_active = TRUE
            AND is_deleted = FALSE
            """
    )
    Optional<Customer> findByNameOrPhoneNum(@Param("keyword") String keyword);

    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_customer
            WHERE is_active = TRUE
            AND is_deleted = FALSE
            ORDER BY created_at DESC 
            """)
    Page<Customer> findAllPage(Pageable pageable);


}
