package org.example.backend.service;

import org.example.backend.dto.request.PropertyCreationRequest;
import org.example.backend.entity.Author;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IAuthorService {
    List<Author> findAllPage(Integer page, Integer size);

    Author findById(Long id) throws DataNotFoundException;

    List<Author> findByName(Integer page, Integer size, String name);

    Author save(PropertyCreationRequest request) throws Exception;

    Author update(Long id, PropertyCreationRequest request) throws DataNotFoundException;

    String delete(Long id) throws DataNotFoundException;
}
