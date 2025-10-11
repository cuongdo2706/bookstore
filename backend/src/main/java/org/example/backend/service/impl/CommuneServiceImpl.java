package org.example.backend.service.impl;

import org.example.backend.entity.Commune;
import org.example.backend.repository.CommuneRepository;
import org.example.backend.service.CommuneService;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommuneServiceImpl implements CommuneService {
    private final CommuneRepository communeRepository;

    public CommuneServiceImpl(CommuneRepository communeRepository) {
        this.communeRepository = communeRepository;
    }

    @Override
    public List<Commune> findByProvinceCode(Short code) {
        return communeRepository.findAllByProvinceCode(code);
    }
}
