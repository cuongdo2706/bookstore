package org.example.backend.dto.response;
import org.example.backend.entity.OrderDetail;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public record OrderOfflineResponse(String code,
                                   LocalDateTime orderAt,
                                   BigDecimal totalPrice,
                                   BigDecimal totalReceive,
                                   String customer,
                                   String staff,
                                   List<OrderDetail>orderDetails,
                                   String orderType,
                                   String note
                                   ) {}
