package org.example.backend.dto.response;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public record OrderResponse(Long id,
                            String code,
                            LocalDateTime expiredAt,
                            LocalDateTime orderedAt,
                            BigDecimal deliveryFee,//online
                            BigDecimal subTotal,//BOTH - tổng giá trị đơn hàng trước giảm
                            BigDecimal discount,//BOTH
                            BigDecimal grandTotal,//BOTH - giá sau giảm
                            BigDecimal amountPaid,//offline
                            BigDecimal changeAmount,//offline
                            CustomerResponse customer,
                            String customerName,//online
                            String email,//online
                            String phoneNum,//online
                            String address,// online
                            StaffResponse staff,//offline
                            List<OrderDetailResponse> orderDetails,
                            List<OrderStatusLogResponse> orderStatusLogs,
                            String note,//online
                            Short paymentStatus,
                            Short orderStatus,//online
                            Short saleChannel,
                            Short orderType) {
}
