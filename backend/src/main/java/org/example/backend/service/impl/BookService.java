package org.example.backend.service.impl;

import org.example.backend.dto.request.BookCreatedRequest;
import org.example.backend.dto.request.BookUpdatedRequest;
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
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

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
        Pageable pageable = PageRequest.of(page, size);
        Page<Book> books = bookRepository.findAllPage(pageable);
        return new PageResponse<BookResponse>(bookMapper.toBookResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
    }

    @Override
    public Book findById(Long id) throws DataNotFoundException {
        return bookRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Book not found"));
    }


    @Override
    public PageResponse<BookResponse> findByCodeOrNameAndSort(Integer page, Integer size, String keyword, String sortInput) {
        if (page < 0) page = 0;
        Specification<Book> spec = BookSpec.findByNameOrCode(keyword);
        Sort sort = null;
        switch (sortInput) {
            case "name-desc" -> sort = Sort.by(Sort.Direction.DESC, "name");
            case "price-asc" -> sort = Sort.by(Sort.Direction.ASC, "sellPrice");
            case "price-desc" -> sort = Sort.by(Sort.Direction.DESC, "sellPrice");
            default -> sort = Sort.by(Sort.Direction.ASC, "name");
        }
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Book> books = bookRepository.findAll(spec, pageable);
        return new PageResponse<BookResponse>(bookMapper.toBookResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
    }

    @Override
    public Book save(BookCreatedRequest request) throws DataNotFoundException {
        Author existAuthor = authorRepository.findById(request.getAuthorId()).orElseThrow(() -> new RuntimeException("Author not found"));
        Category existCategory = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> new RuntimeException("Category not found"));
        String productCode = GenerateCodeUtil.generateProductCode();
        while (bookRepository.existsByCode(productCode)) {
            productCode = GenerateCodeUtil.generateProductCode();
        }
        Book book = bookMapper.toCreatedBook(request, existCategory, existAuthor);
        return bookRepository.save(book);
    }

    @Override
    public Book update(Long id, BookUpdatedRequest request) throws IOException, DataNotFoundException {
        Author existAuthor = authorRepository.findById(request.getAuthorId()).orElseThrow(() -> new RuntimeException("Author not found"));
        Category existCategory = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> new RuntimeException("Category not found"));
        Book existedBook = findById(id);
        Book updateBook = bookMapper.toUpdatedBook(existedBook, request, existCategory, existAuthor);
        return bookRepository.save(updateBook);
    }

    @Override
    @Transactional
    public void softDelete(Long id) {
        bookRepository.softDelete(id);
    }
}
