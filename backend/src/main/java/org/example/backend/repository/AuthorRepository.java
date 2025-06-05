package org.example.backend.repository;

import org.example.backend.entity.Author;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Long> {

    List<Author> findAllByOrderByNameAsc();

    List<Author> findAllById(Iterable<Long> ids);

    @Query(value = "SELECT * FROM tbl_author WHERE is_deleted = FALSE ORDER BY name DESC ", nativeQuery = true)
    Page<Author> findAllPage(Pageable pageable);

    @Query(nativeQuery = true, value = "SELECT * FROM tbl_author WHERE unaccent(name) ILIKE  unaccent(CONCAT('%', :name, '%')) AND is_deleted = FALSE ORDER BY name DESC ")
    Page<Author> findByName(Pageable pageable, @Param("name") String name);

    Boolean existsByName(String name);
}
