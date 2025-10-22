package org.example.backend.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

public record PromotionResponse(Long id,
                                String code,
                                String name,
                                String description,
                                LocalDate startDate,
                                LocalDate endDate,
                                Short promotionType,
                                BigDecimal promotionValue,
                                Boolean isActive,
                                LocalDateTime createdAt,
                                LocalDateTime updatedAt
) {
}
