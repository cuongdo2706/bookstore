package org.example.backend.service.impl;

import org.example.backend.entity.Province;
import org.example.backend.repository.ProvinceRepository;
import org.example.backend.service.ProvinceService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceServiceImpl implements ProvinceService {
    private final ProvinceRepository provinceRepository;

    public ProvinceServiceImpl(ProvinceRepository provinceRepository) {
        this.provinceRepository = provinceRepository;
    }

    @Override
    public List<Province> findAll() {
        return provinceRepository.findAll();
    }
}
