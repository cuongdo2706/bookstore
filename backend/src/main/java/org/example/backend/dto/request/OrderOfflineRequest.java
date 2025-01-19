package org.example.backend.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderOfflineRequest {
    BigDecimal amountPaid;
    Long customerId;
    Long staffId;
    String note;
    List<OrderItem>orderItems;

    @Getter
    @Setter
    @FieldDefaults(level = AccessLevel.PRIVATE)
    public class OrderItem {
        Long productId;
        Integer quantity;
    }
}
