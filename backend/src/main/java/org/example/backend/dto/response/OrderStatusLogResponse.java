package org.example.backend.dto.response;

import java.time.LocalDateTime;

public record OrderStatusLogResponse(Long id,
                                     Short status,
                                     LocalDateTime confirmAt,
                                     String confirmBy,
                                     LocalDateTime createdAt,
                                     LocalDateTime updatedAt) {
}
