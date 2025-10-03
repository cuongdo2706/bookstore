package org.example.backend.service;

import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.response.PublisherResponse;
import org.example.backend.entity.Publisher;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;

import java.util.List;

public interface PublisherService {
    List<PublisherResponse>findAll();

    Publisher findById(Long id) throws DataNotFoundException;

    PublisherResponse save(CreateAttributeRequest request) throws DataExistedException;

    boolean existsByName(String name);
}
