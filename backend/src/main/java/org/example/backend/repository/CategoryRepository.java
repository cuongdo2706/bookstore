package org.example.backend.repository;

import org.example.backend.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = "SELECT * FROM tbl_category WHERE is_deleted = FALSE ORDER BY name DESC ", nativeQuery = true)
    Page<Category> findAllPage(Pageable pageable);

    @Query(value = "SELECT * FROM tbl_category WHERE LOWER(name) LIKE LOWER(CONCAT('%', :name, '%')) AND is_deleted = FALSE ORDER BY name DESC", nativeQuery = true)
    Page<Category> findByName(Pageable pageable, @Param("name") String name);

    Boolean existsByName(String name);
}
