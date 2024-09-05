package org.example.backend.service.impl;

import lombok.Builder;
import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Book;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.BookMapper;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.repository.BookRepository;
import org.example.backend.repository.CategoryRepository;
import org.example.backend.service.IBookService;
import org.example.backend.spec.BookSpec;
import org.example.backend.utility.GenerateCodeUtil;
import org.example.backend.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class BookService implements IBookService {
    @Autowired
    private BookMapper bookMapper;

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
    public PageResponse<BookResponse> findAllPage(Integer page, Integer size) {
        if (page < 0) page = 0;
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC, "name"));
        Page<Book> books = bookRepository.findAll(pageable);
        return new PageResponse<BookResponse>(bookMapper.toBookResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
    }


    @Override
    public PageResponse<BookResponse> findByCodeOrNameAndSort(Integer page, Integer size, String keyword, String sortInput) {
        if (page < 0) page = 0;
        Specification<Book> spec = BookSpec.findByNameOrCode(keyword);
        Sort sort = null;
        switch (sortInput) {
            case "name-desc" -> sort = Sort.by(Sort.Direction.DESC, "name");
            case "price-asc" -> sort = Sort.by(Sort.Direction.ASC, "defaultPrice");
            case "price-desc" -> sort = Sort.by(Sort.Direction.DESC, "defaultPrice");
            default -> sort = Sort.by(Sort.Direction.ASC, "name");
        }
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Book> books = bookRepository.findAll(spec, pageable);
        return new PageResponse<BookResponse>(bookMapper.toBookResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
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
