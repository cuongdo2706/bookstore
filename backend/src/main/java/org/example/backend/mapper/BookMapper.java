package org.example.backend.mapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Book;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.repository.CategoryRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
public class BookMapper {
    public Book toBook(BookCreationRequest request,Category existedCategory,Author existedAuthor) throws DataNotFoundException {
        return Book.builder().
                name(request.getName()).
                quantity(request.getQuantity()).
                publicId(request.getPublicId()).
                imgUrl(request.getUrl()).
                defaultPrice(request.getDefaultPrice()).
                sellPrice(request.getDefaultPrice()).
                publisher(request.getPublisher()).
                translator(request.getTranslator()).
                numOfPages(request.getNumOfPages()).
                publishedYear(request.getPublishedYear()).
                description(request.getDescription()).
                isActive(request.getIsActive()).
                category(existedCategory).
                author(existedAuthor).
                build();
    }
    public BookResponse toBookResponse(Book book) {
        return new BookResponse(
                book.getId(),
                book.getCode(),
                book.getName(),
                book.getImgUrl(),
                book.getQuantity(),
                book.getDefaultPrice(),
                book.getSellPrice(),
                book.getPublisher(),
                book.getTranslator(),
                book.getNumOfPages(),
                book.getPublishedYear(),
                book.getIsActive(),
                book.getDescription(),
                new BookResponse.AuthorResponse(book.getAuthor().getId(), book.getAuthor().getName()),
                new BookResponse.CategoryResponse(book.getCategory().getId(),book.getCategory().getName()),
                book.getCreatedAt(),
                book.getUpdatedAt()
        );
    }
    public List<BookResponse> toBookResponses(List<Book> books) {
        return books.stream()
                .map(this::toBookResponse)
                .collect(Collectors.toList());
    }
}
