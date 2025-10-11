package org.example.backend.service;

import org.example.backend.entity.Commune;

import java.util.List;

public interface CommuneService {
    List<Commune> findByProvinceCode(Short code);
}
