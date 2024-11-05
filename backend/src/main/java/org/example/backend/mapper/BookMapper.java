package org.example.backend.mapper;

import org.example.backend.dto.request.BookCreatedRequest;
import org.example.backend.dto.request.BookUpdatedRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Book;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.utility.GenerateCodeUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class BookMapper {
    public Book toCreatedBook(BookCreatedRequest request, Category existedCategory, Author existedAuthor) {
        Book book = new Book();
        book.setCode(GenerateCodeUtil.generateProductCode());
        book.setName(request.getName());
        book.setQuantity(request.getQuantity());
        if (request.getPublicId() != null) {
            book.setPublicId(request.getPublicId());
        }
        if (request.getImgUrl() != null) {
            book.setImgUrl(request.getImgUrl());
        }
        book.setPrice(request.getPrice());
        book.setSellPrice(request.getPrice());
        if (request.getPublisher() != null) {
            book.setPublisher(request.getPublisher());
        }
        if (request.getTranslator() != null) {
            book.setTranslator(request.getTranslator());
        }
        if (request.getNumOfPages() != null) {
            book.setNumOfPages(request.getNumOfPages());
        }
        if (request.getPublishedYear() != null) {
            book.setPublishedYear(request.getPublishedYear());
        }
        if (request.getDescription() != null) {
            book.setDescription(request.getDescription());
        }
        book.setIsActive(true);
        book.setIsDeleted(false);
        book.setCategory(existedCategory);
        book.setAuthor(existedAuthor);
        return book;
    }

    public Book toUpdatedBook(Book existedBook, BookUpdatedRequest request, Category existedCategory, Author existedAuthor) throws DataNotFoundException {
        if (request.getName() != null) {
            existedBook.setName(request.getName());
        }
        if (request.getQuantity() != null) {
            existedBook.setQuantity(request.getQuantity());
        }
        if (request.getPublicId() != null) {
            existedBook.setPublicId(request.getPublicId());
        }
        if (request.getImgUrl() != null) {
            existedBook.setImgUrl(request.getImgUrl());
        }
        if (request.getPrice() != null) {
            existedBook.setPrice(request.getPrice());
            existedBook.setSellPrice(request.getPrice());
        }
        if (request.getPublisher() != null) {
            existedBook.setPublisher(request.getPublisher());
        }
        if (request.getTranslator() != null) {
            existedBook.setTranslator(request.getTranslator());
        }
        if (request.getNumOfPages() != null) {
            existedBook.setNumOfPages(request.getNumOfPages());
        }
        if (request.getPublishedYear() != null) {
            existedBook.setPublishedYear(request.getPublishedYear());
        }
        if (request.getDescription() != null) {
            existedBook.setDescription(request.getDescription());
        }
        if (request.getCategoryId() != null) {
            existedBook.setCategory(existedCategory);
        }
        if (request.getAuthorId() != null) {
            existedBook.setAuthor(existedAuthor);
        }
        return existedBook;
    }

    public BookResponse toBookResponse(Book book) {
        return new BookResponse(
                book.getId(),
                book.getCode(),
                book.getName(),
                book.getImgUrl(),
                book.getQuantity(),
                book.getPrice(),
                book.getSellPrice(),
                book.getPublisher(),
                book.getTranslator(),
                book.getNumOfPages(),
                book.getPublishedYear(),
                book.getIsActive(),
                book.getDescription(),
                new BookResponse.AuthorResponse(book.getAuthor().getId(), book.getAuthor().getName()),
                new BookResponse.CategoryResponse(book.getCategory().getId(), book.getCategory().getName()),
                book.getCreatedAt(),
                book.getUpdatedAt()
        );
    }

    public List<BookResponse> toBookResponses(List<Book> books) {
        return books.stream()
                .map(this::toBookResponse)
                .collect(Collectors.toList());
    }

    public Page<BookResponse> toBookResponsePage(Page<Book> books) {
        List<BookResponse> bookResponses = books.stream()
                .map(this::toBookResponse)
                .toList();
        return new PageImpl<>(bookResponses, PageRequest.of(books.getNumber(), books.getSize()), books.getTotalElements());
    }
}
