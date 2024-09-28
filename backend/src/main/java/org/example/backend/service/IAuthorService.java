package org.example.backend.service;

import org.example.backend.entity.Author;
import org.example.backend.exception.DataNotFoundException;
import java.util.List;

public interface IAuthorService {
    List<Author> findAll();

    List<Author> findAllPage(Integer page, Integer size);

    Author findById(Long id) throws DataNotFoundException;

    List<Author> findByName(Integer page, Integer size, String name);

    Author save(String name) throws Exception;

    Author update(Long id, String name) throws DataNotFoundException;

    String delete(Long id) throws DataNotFoundException;
}
