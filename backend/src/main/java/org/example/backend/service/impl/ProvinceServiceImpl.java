package org.example.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.backend.entity.Province;
import org.example.backend.repository.ProvinceRepository;
import org.example.backend.service.ProvinceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProvinceServiceImpl implements ProvinceService {
    private final ProvinceRepository provinceRepository;

    @Override
    public List<Province> findAll() {
        return provinceRepository.findAll();
    }

    @Override
    public boolean existsByCode(Short code) {
        return provinceRepository.existsByCode(code);
    }

    @Override
    public Province getReferenceById(Short code) {
        return provinceRepository.getReferenceById(code);
    }
}
