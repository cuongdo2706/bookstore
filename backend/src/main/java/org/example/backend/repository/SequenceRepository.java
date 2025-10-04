package org.example.backend.repository;

import org.example.backend.entity.Sequence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SequenceRepository extends JpaRepository<Sequence, String> {
    @Modifying
    @Query(value = "update tbl_sequence set value=LAST_INSERT_ID(value + 1) where name=:name", nativeQuery = true)
    void increment(@Param("name") String name);

    @Query(value = "SELECT LAST_INSERT_ID()", nativeQuery = true)
    Long getLastInsertId();
}
