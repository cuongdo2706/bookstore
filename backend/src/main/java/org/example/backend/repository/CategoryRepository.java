package org.example.backend.repository;

import org.example.backend.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    @Query("SELECT c FROM Category c WHERE c.isDeleted=FALSE ORDER BY c.createdAt DESC")
    Page<Category> findAllPage(Pageable pageable);
}
