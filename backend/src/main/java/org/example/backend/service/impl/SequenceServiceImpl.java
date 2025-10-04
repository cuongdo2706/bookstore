package org.example.backend.service.impl;

import org.example.backend.repository.SequenceRepository;
import org.example.backend.service.SequenceService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SequenceServiceImpl implements SequenceService {
    private final SequenceRepository repository;

    public SequenceServiceImpl(SequenceRepository repository) {
        this.repository = repository;
    }

    @Transactional
    @Override
    public Long getNextValue(String name) {
        repository.increment(name);
        return repository.getLastInsertId();
    }

    @Transactional
    @Override
    public String generateCustomerCode() {
        Long seg = getNextValue("customer");
        return String.format("KH%010d", seg);
    }
}
