package org.example.backend.repository;

import org.example.backend.entity.Commune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommuneRepository extends JpaRepository<Commune, Integer> {
    @Query(nativeQuery = true, value = """
                    SELECT c.* FROM tbl_commune c
                    WHERE c.province_id = :code
            """)
    List<Commune> findAllByProvinceCode(@Param("code") Short code);
}
