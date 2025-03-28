package org.example.backend.repository;

import org.example.backend.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface StaffRepository extends JpaRepository<Staff, Long> {
    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_staff
            WHERE (unaccent(name) ILIKE unaccent(concat('%',:keyword,'%'))) 
            OR (phone_num LIKE concat('%',:keyword,'%'))
            AND is_active = TRUE
            AND is_deleted = FALSE
            """
    )
    Staff findByNameOrPhoneNumContains(@Param("keyword") String keyword);

    @Query(nativeQuery = true, value = """
                        SELECT * FROM tbl_staff
                        WHERE id = :id
                        AND is_deleted = FALSE
            """)
    Optional<Staff> findByIdNotDeleted(@Param("id") Long id);
}
