package org.example.backend.repository;

import org.example.backend.entity.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {
    @Query(nativeQuery = true, value = """
                    SELECT EXISTS(
                        SELECT 1 FROM tbl_promotion
                        WHERE id=:id
                        AND is_active=TRUE
                        AND (NOW() BETWEEN start_date AND end_date)
                    )
            """)
    Boolean isValidPromotion(@Param("id") Long id);
}
