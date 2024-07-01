package org.example.backend.repository;
import org.example.backend.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("SELECT b FROM Book b WHERE b.status = :status ORDER BY b.createdAt DESC")
    Page<Book> findAllPage(Pageable pageable, @Param("status") String status);

    boolean existsByCode(String code);

}
