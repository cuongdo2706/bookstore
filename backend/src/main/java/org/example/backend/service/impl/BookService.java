package org.example.backend.service.impl;

import lombok.Builder;
import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Book;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.BookMapper;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.repository.BookRepository;
import org.example.backend.repository.CategoryRepository;
import org.example.backend.service.IBookService;
import org.example.backend.utility.GenerateCodeUtil;
import org.example.backend.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class BookService implements IBookService {
    BookMapper bookMapper = new BookMapper();

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private ImageUtil imageUtil;

    @Override
    public List<BookResponse> findAll() {
        return bookMapper.toBookResponses(bookRepository.findAll());
    }

    @Override
    public List<BookResponse> findAllPage(Integer page, Integer size) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return bookMapper.toBookResponses(bookRepository.findAllPage(pageable).getContent());
    }

    @Override
    public List<BookResponse> findByCodeOrName(Integer page, Integer size, String keyword) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return bookMapper.toBookResponses(bookRepository.findByCodeOrName(pageable,keyword).getContent());
    }

    @Override
    public Book save(BookCreationRequest request) throws DataNotFoundException {
        Author existAuthor = authorRepository.findById(request.getAuthorId()).orElseThrow(() -> new DataNotFoundException("Author not found"));
        Category existCategory = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> new DataNotFoundException("Category not found"));
        String productCode = GenerateCodeUtil.generateProductCode();
        while (bookRepository.existsByCode(productCode)) {
            productCode = GenerateCodeUtil.generateProductCode();
        }
        Book book = bookMapper.toBook(request, existCategory, existAuthor);
        return bookRepository.save(book);
    }

    @Override
    public String softDelete(Long id) {
        bookRepository.softDelete(id);
        return "Delete successfully!!!";
    }

    @Override
    public String softDeleteByIds(List<Long> ids) {
        bookRepository.softDeleteByIds(ids);
        return "Delete successfully!!!";
    }
}
