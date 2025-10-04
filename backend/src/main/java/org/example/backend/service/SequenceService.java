package org.example.backend.service;

public interface SequenceService {
    Long getNextValue(String name);
    String generateCustomerCode();
}
