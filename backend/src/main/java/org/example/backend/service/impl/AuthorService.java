package org.example.backend.service.impl;

import org.example.backend.entity.Author;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.exception.DataExistedException;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.service.IAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService implements IAuthorService {
    @Autowired
    private AuthorRepository authorRepository;


    @Override
    public List<Author> findAll() {
        return authorRepository.findAllList();
    }

    @Override
    public List<Author> findAllPage(Integer page, Integer size) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return authorRepository.findAllPage(pageable).getContent();
    }

    @Override
    public Author findById(Long id) throws DataNotFoundException {
        return authorRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Author not found: " + id));
    }

    @Override
    public List<Author> findByName(Integer page, Integer size, String name) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return authorRepository.findByName(pageable, name).getContent();
    }

    @Override
    public Author save(String name) {
        if (authorRepository.existsByName(name)) {
            throw new DataExistedException("Author is already existed");
        }
        Author author = Author.builder()
                .name(name)
                .isDeleted(Boolean.FALSE)
                .build();
        return authorRepository.save(author);
    }

    @Override
    public Author update(Long id, String name) throws DataNotFoundException {
        Author existedAuthor = findById(id);
        existedAuthor.setName(name);
        return authorRepository.save(existedAuthor);
    }

    @Override
    public void delete(Long id) throws DataNotFoundException {
        Author existedAuthor = findById(id);
        existedAuthor.setIsDeleted(true);
    }
}
