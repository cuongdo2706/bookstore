package org.example.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.backend.entity.Commune;
import org.example.backend.repository.CommuneRepository;
import org.example.backend.service.CommuneService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommuneServiceImpl implements CommuneService {
    private final CommuneRepository communeRepository;

    @Override
    public List<Commune> findByProvinceCode(Short code) {
        return communeRepository.findAllByProvinceCode(code);
    }

    @Override
    public short existsByCommuneCodeAndProvinceCode(Integer code, Short provinceCode) {
        return communeRepository.existsByCommuneCodeAndProvinceCode(code, provinceCode);
    }

    @Override
    public Commune getReferenceById(Integer code) {
        return communeRepository.getReferenceById(code);
    }
}
