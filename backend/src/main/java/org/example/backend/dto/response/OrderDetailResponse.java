package org.example.backend.dto.response;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record OrderDetailResponse(Long id,
                                  Long productId,
                                  String productCode,
                                  String productName,
                                  BigDecimal price,
                                  Integer quantity,
                                  BigDecimal discount,
                                  BigDecimal totalPrice,
                                  LocalDateTime createdAt,
                                  LocalDateTime updatedAt) {
}
