package org.example.backend.repository;

import org.example.backend.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
    @Query(nativeQuery = true,value = """
        select * from tbl_user
        where id = :id
""")
    Optional<User>findUserById(@Param("id")Long id);

    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_user
            WHERE unaccent(name) ILIKE unaccent(concat('%',:keyword,'%'))
            OR phone_num LIKE concat('%',:keyword,'%')
            AND is_active = TRUE
            AND is_deleted = FALSE
            AND role = #{T(org.example.backend.constant.RoleConstant).GUEST}
            """
    )
    Optional<User> findCustomerByNameOrPhoneNum(@Param("keyword") String keyword);

    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_user
            WHERE is_active = TRUE
            AND is_deleted = FALSE
            AND role = #{T(org.example.backend.constant.RoleConstant).GUEST}
            ORDER BY created_at DESC 
            """)
    Page<User> findAllPageCustomer(Pageable pageable);

    @Query(nativeQuery = true, value = """
            SELECT * FROM tbl_user
            WHERE (unaccent(name) ILIKE unaccent(concat('%',:keyword,'%'))) 
            OR (phone_num LIKE concat('%',:keyword,'%'))
            AND is_active = TRUE
            AND is_deleted = FALSE
            AND role = #{T(org.example.backend.constant.RoleConstant).STAFF}
            """
    )
    Optional<User> findStaffByNameOrPhoneNum(@Param("keyword") String keyword);
}
