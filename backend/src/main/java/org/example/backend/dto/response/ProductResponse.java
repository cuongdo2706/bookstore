package org.example.backend.dto.response;
import java.math.BigDecimal;
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
        String translator,
        Integer numOfPages,
        Integer publishedYear,
        Boolean isActive,
        String description,
        Set<AuthorResponse> authors,
        Set<CategoryResponse> categories,
        PublisherResponse publisher,
        PromotionResponse promotion,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {

}

