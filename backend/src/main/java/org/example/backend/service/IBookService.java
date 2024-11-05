package org.example.backend.service;

import org.example.backend.dto.request.BookCreatedRequest;
import org.example.backend.dto.request.BookUpdatedRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.entity.Book;
import org.example.backend.exception.DataNotFoundException;

import java.io.IOException;
import java.util.List;

public interface IBookService {
    List<BookResponse> findAll();

    PageResponse<BookResponse> findAllPage(Integer page, Integer size);

    Book findById(Long id) throws DataNotFoundException;

    PageResponse<BookResponse> findByCodeOrNameAndSort(Integer page, Integer size, String keyword, String sort);

    Book save(BookCreatedRequest request) throws IOException, DataNotFoundException;

    Book update(Long id, BookUpdatedRequest request) throws IOException, DataNotFoundException;

    void softDelete(Long id);
}
