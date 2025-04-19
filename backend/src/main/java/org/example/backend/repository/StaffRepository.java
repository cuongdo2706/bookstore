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

    @Query(value = """
                        SELECT s FROM Staff s
                        WHERE s.user.username = :username
                        AND s.isDeleted = FALSE 
            """)
    Optional<Staff> findByUsername(@Param("username") String username);

    @Query(nativeQuery = true, value = """
                        SELECT * FROM tbl_staff
                        WHERE id = :id
                        AND is_deleted = FALSE
            """)
    Optional<Staff> findByIdNotDeleted(@Param("id") Long id);
}
