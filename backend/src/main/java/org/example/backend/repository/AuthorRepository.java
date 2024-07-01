package org.example.backend.repository;

import org.example.backend.entity.Author;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AuthorRepository extends JpaRepository<Author,Long> {
    @Query("SELECT a FROM Author a WHERE a.isDeleted=FALSE ORDER BY a.createdAt DESC")
    Page<Author>findAllPage(Pageable pageable);
}
