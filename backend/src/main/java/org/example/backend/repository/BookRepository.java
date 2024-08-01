package org.example.backend.repository;

import org.example.backend.dto.response.BookResponse;
import org.example.backend.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    @Query(nativeQuery = true, value = """
            SELECT *
            FROM tbl_book b
            WHERE b.is_active = TRUE AND b.is_deleted = FALSE
            ORDER BY b.created_at DESC
            """)
    Page<Book> findAllPage(Pageable pageable);

    @Query(nativeQuery = true, value = """
            SELECT *
            FROM tbl_book b
            WHERE :keyword IS NULL OR LOWER(name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(code) LIKE LOWER(CONCAT('%', :keyword, '%')) AND b.is_active = TRUE AND b.is_deleted = FALSE
            ORDER BY b.created_at DESC
            """)
    Page<Book> findByCodeOrName(Pageable pageable, String keyword);

    @Modifying
    @Query(nativeQuery = true,value = "UPDATE tbl_book SET is_deleted = true WHERE id = :id")
    void softDelete(@Param("id") Long id);

    @Modifying
    @Query(nativeQuery = true,value = "UPDATE tbl_book SET is_deleted = true WHERE id IN :ids")
    void softDeleteByIds(@Param("ids") List<Long> ids);

    boolean existsByCode(String code);

}
