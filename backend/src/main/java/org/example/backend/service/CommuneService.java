package org.example.backend.service;

import org.example.backend.entity.Commune;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommuneService {
    List<Commune> findByProvinceCode(Short code);

    short existsByCommuneCodeAndProvinceCode(Integer code, Short provinceCode);

    Commune getReferenceById(Integer code);
}
