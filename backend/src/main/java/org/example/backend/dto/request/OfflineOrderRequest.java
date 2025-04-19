package org.example.backend.dto.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OfflineOrderRequest {
    @Min(value = 0, message = "Amount paid must be greater than or equal 0")
    @NotNull(message = "Amount paid must not be null")
    BigDecimal amountPaid;

    Long customerId;


    @NotNull(message = "Staff ID paid must not be null")
    String staffUsername;

    Long couponId;

    @NotNull(message = "Cart must not be null")
    @Size(min = 1, message = "Cart must have at least 1 product")

    List<@Valid OrderItem> orderItems;

    //------------------------------------------------------------------------------
    @Getter
    @Setter
    @FieldDefaults(level = AccessLevel.PRIVATE)
    public static class OrderItem {
        @Min(value = 0, message = "Product ID must be greater than or equal 0")
        @NotNull(message = "Product ID paid must not be null")
        Long productId;
        @Min(value = 1, message = "Quantity must be greater than 0")
        Integer quantity;
        BigDecimal price;
    }
}
