package org.example.backend.service.impl;

import lombok.Builder;
import org.example.backend.constraint.ProductStatusConstraint;
import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.entity.Author;
import org.example.backend.entity.Book;
import org.example.backend.entity.Category;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.repository.BookRepository;
import org.example.backend.repository.CategoryRepository;
import org.example.backend.service.IBookService;
import org.example.backend.utility.GenerateCodeUtil;
import org.example.backend.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Map;

@Service
public class BookService implements IBookService {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private ImageUtil imageUtil;

    @Override
    public Page<Book> findAllPage(Integer page) {
        if (page < 1) page = 1;
        Pageable pageable = PageRequest.of(page - 1, 10);
        return bookRepository.findAllPage(pageable, ProductStatusConstraint.SELLING);
    }

    @Override
    public Book save(BookCreationRequest request) throws IOException {
        Author existAuthor = authorRepository.getReferenceById(request.getAuthorId());
        Category existCategory = categoryRepository.getReferenceById(request.getCategoryId());
        String productCode = GenerateCodeUtil.generateProductCode();
        while (bookRepository.existsByCode(productCode)) {
            productCode = GenerateCodeUtil.generateProductCode();
        }
        Map uploadResult = imageUtil.upload(request.getImage());
        String publicId = (String) uploadResult.get("public_id");
        String url = (String) uploadResult.get("url");
        Book book = Book.builder()
                .code(productCode)
                .name(request.getName())
                .publicId(publicId)
                .imgUrl(url)
                .quantity(request.getQuantity())
                .defaultPrice(request.getDefaultPrice())
                .sellPrice(request.getSellPrice())
                .publisher(request.getPublisher())
                .translator(request.getTranslator())
                .numOfPages(request.getNumOfPages())
                .publishedYear(request.getPublishedYear())
                .description(request.getDescription())
                .status(ProductStatusConstraint.SELLING)
                .category(existCategory)
                .author(existAuthor)
                .build();
        return bookRepository.save(book);
    }
}
