package org.example.backend.service;

import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;

public interface IBookService {
    Page<Book>findAllPage(Integer page);

    Book save(BookCreationRequest request) throws IOException;
}
