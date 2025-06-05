package org.example.backend.dto.response;

import java.math.BigDecimal;

public record OrderDetailResponse(Long id,
                                  Long productId,
                                  String productCode,
                                  String productName,
                                  BigDecimal price,
                                  Integer quantity,
                                  BigDecimal discount,
                                  BigDecimal totalPrice) {
}
