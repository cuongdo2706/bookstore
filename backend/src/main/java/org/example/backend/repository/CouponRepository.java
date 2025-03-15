package org.example.backend.repository;

import org.example.backend.entity.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface CouponRepository extends JpaRepository<Coupon, Long> {
    @Query(nativeQuery = true, value = """
                SELECT * FROM tbl_coupon
                WHERE code = :code 
                AND now() BETWEEN start_date AND end_date
                AND used_count < quantity
                AND is_active = TRUE
                AND is_deleted = FALSE
            """)
    Coupon findValidCouponByCode(@Param("code") String code);
}
