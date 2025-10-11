package org.example.backend.repository;

import org.example.backend.entity.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProvinceRepository extends JpaRepository<Province,Short> {
}
