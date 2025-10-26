package org.example.backend.repository;

import org.example.backend.entity.Sequence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface SequenceRepository extends JpaRepository<Sequence, String> {
    @Transactional
    @Query(value = "UPDATE tbl_sequence SET value = value + 1 WHERE name = :name RETURNING value", nativeQuery = true)
    Long incrementAndGet(@Param("name") String name);
}
