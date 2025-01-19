package org.example.backend.repository;

import org.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_user
            WHERE id = :id
            AND is_active = TRUE
            AND is_deleted = FALSE
            AND role = :role
            """
    )
    Optional<User> findCustomerById(@Param("id") Long id, String role);

    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_user
            WHERE id = :id
            AND is_active = TRUE
            AND is_deleted = FALSE
            AND role = :role
            """
    )
    Optional<User> findStaffById(@Param("id") Long id, String role);
}
