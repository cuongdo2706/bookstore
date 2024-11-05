package org.example.backend.repository;

import org.example.backend.dto.response.BookResponse;
import org.example.backend.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> , JpaSpecificationExecutor<Book> {
    @Query(nativeQuery = true,
            value = """
            SELECT *
            FROM tbl_book b
            WHERE b.is_active = TRUE AND b.is_deleted = FALSE
            ORDER BY b.name
            """)
    Page<Book> findAllPage(Pageable pageable);

    @Modifying
    @Query(nativeQuery = true,value = "UPDATE tbl_book SET is_deleted = true WHERE id = :id")
    void softDelete(@Param("id") Long id);

    boolean existsByCode(String code);

}
