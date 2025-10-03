package org.example.backend.service.impl;

import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.response.AuthorResponse;
import org.example.backend.entity.Author;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.exception.DataExistedException;
import org.example.backend.mapper.AuthorMapper;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.service.AuthorService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Set;

@Service
public class AuthorServiceImpl implements AuthorService {
    private final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public List<AuthorResponse> findAll() {
        return AuthorMapper.toAuthorResponses(authorRepository.findAllByOrderByNameAsc());
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
    public AuthorResponse findAuthorResponseById(Long id) throws DataNotFoundException {
        return AuthorMapper.toAuthorResponse(findById(id));
    }

    @Override
    public List<Author> findByName(Integer page, Integer size, String name) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return authorRepository.findByName(pageable, name).getContent();
    }

    @Override
    public AuthorResponse save(CreateAttributeRequest request) {
        if (authorRepository.existsByName(request.getName())) {
            throw new DataExistedException("Author is already existed");
        }
        Author author = Author.builder()
                .name(request.getName())
                .build();
        return AuthorMapper.toAuthorResponse(authorRepository.save(author));
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

    @Override
    public List<Author> findAllByIds(Set<Long> ids) {
        return authorRepository.findAllById(ids);
    }
}
