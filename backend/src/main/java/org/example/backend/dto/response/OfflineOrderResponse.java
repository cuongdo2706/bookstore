package org.example.backend.dto.response;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public record OfflineOrderResponse(String code,
                                   LocalDateTime orderAt,
                                   BigDecimal totalPrice,
                                   BigDecimal totalReceive,
                                   String customer,
                                   String staff,
                                   List<OrderDetailResponse> orderDetails,
                                   String note,
                                   String orderType) {
}
