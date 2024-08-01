package org.example.backend.service;

import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.entity.Book;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.util.List;

public interface IBookService {
    List<BookResponse>findAll();

    List<BookResponse> findAllPage(Integer page, Integer size);

    List<BookResponse> findByCodeOrName(Integer page, Integer size,String keyword);

    Book save(BookCreationRequest request) throws IOException, DataNotFoundException;

    String softDelete(Long id);

    String softDeleteByIds(List<Long> ids);
}
