package org.example.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.backend.repository.SequenceRepository;
import org.example.backend.service.SequenceService;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SequenceServiceImpl implements SequenceService {
    private final SequenceRepository repository;

    @Override
    public Long getNextValue(String name) {
        return repository.incrementAndGet(name);
    }

    @Override
    public String generateCustomerCode() {
        Long seg = getNextValue("customer");
        return String.format("KH%010d", seg);
    }

    @Override
    public String generateProductCode() {
        Long seg = getNextValue("product");
        return String.format("S%010d", seg);
    }
}
