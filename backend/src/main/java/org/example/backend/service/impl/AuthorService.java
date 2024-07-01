package org.example.backend.service.impl;

import org.example.backend.entity.Author;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.service.IAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AuthorService implements IAuthorService {
    @Autowired
    private AuthorRepository authorRepository;

    @Override
    public Page<Author> findAllPage(Integer page) {
        if (page < 1) page = 1;
        Pageable pageable = PageRequest.of(page - 1, 10);
        return authorRepository.findAllPage(pageable);
    }
}
