package org.example.backend.service;

import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.response.AuthorResponse;
import org.example.backend.entity.Author;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;

import java.util.List;
import java.util.Set;

public interface AuthorService {
    List<AuthorResponse> findAll();

    List<Author> findAllPage(Integer page, Integer size);

    Author findById(Long id) throws DataNotFoundException;

    AuthorResponse findAuthorResponseById(Long id) throws DataNotFoundException;

    List<Author> findByName(Integer page, Integer size, String name);

    AuthorResponse save(CreateAttributeRequest request) throws DataExistedException;

    Author update(Long id, String name) throws DataNotFoundException;

    void delete(Long id) throws DataNotFoundException;

    List<Author> findAllByIds(Set<Long> ids);
}
