package org.example.backend.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record ProductResponse(Long id,
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
                              PromotionResponse promotion,
                              LocalDateTime createdAt,
                              LocalDateTime updatedAt) {
    public record AuthorResponse(Long id, String name) {
    }

    public record CategoryResponse(Long id, String name) {
    }

    public record PromotionResponse(Long id,
                                    String code,
                                    String name,
                                    String description,
                                    LocalDate startDate,
                                    LocalDate endDate,
                                    String promotionType,
                                    BigDecimal promotionValue,
                                    Boolean isActive
    ) {
    }
}
