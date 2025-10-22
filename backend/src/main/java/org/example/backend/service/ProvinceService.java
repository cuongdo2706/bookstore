package org.example.backend.service;

import org.example.backend.entity.Province;

import java.util.List;

public interface ProvinceService {
    List<Province> findAll();

    boolean existsByCode(Short code);

    Province getReferenceById(Short code);
}
