package org.example.backend.repository;

import org.example.backend.entity.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface VoucherRepository extends JpaRepository<Voucher,Long> {
    @Query(nativeQuery = true,value = """
                SELECT * FROM tbl_voucher 
                WHERE code = :code 
                AND now() BETWEEN start_date AND end_date
                AND used_count < quantity
                AND is_active = TRUE
                AND is_deleted = FALSE
            """)
    Voucher findValidVoucherByCode(@Param("code") String code);
}
