package org.example.backend.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record ProductResponse(
        Long id,
        String code,
        String name,
        String imgUrl,
        Integer quantity,
        BigDecimal price,
        String publisher,
        String translator,
        Integer numOfPages,
        Integer publishedYear,
        Boolean isActive,
        String description,
        AuthorResponse author,
        CategoryResponse category,
        PromotionResponse promotion) {

}

