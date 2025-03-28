package org.example.backend.repository;

import org.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query(nativeQuery = true, value = """
                    SELECT * FROM tbl_user
                    WHERE username = :username
                    AND is_deleted = FALSE
            """)
    Optional<User> findByUsername(@Param("username") String username);
}
