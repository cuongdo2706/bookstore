package org.example.backend.dto.response;

import org.example.backend.entity.Author;
import org.example.backend.entity.Category;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

public record ProductResponse(
        Long id,
        String code,
        String name,
        String publicId,
        String imgUrl,
        Integer quantity,
        BigDecimal price,
        String publisher,
        String translator,
        Integer numOfPages,
        Integer publishedYear,
        Boolean isActive,
        String description,
        Set<AuthorResponse> authors,
        Set<CategoryResponse> categories,
        PromotionResponse promotion) {

}

