package org.example.backend.dto.response;

import java.time.LocalDateTime;

public record OrderStatusHistoryResponse(Long id,
                                         Short oldStatus,
                                         Short newStatus,
                                         LocalDateTime confirmAt) {
}
