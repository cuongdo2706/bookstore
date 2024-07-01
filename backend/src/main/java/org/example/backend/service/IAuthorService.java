package org.example.backend.service;

import org.example.backend.entity.Author;
import org.springframework.data.domain.Page;

public interface IAuthorService {
    Page<Author> findAllPage(Integer page);
}
