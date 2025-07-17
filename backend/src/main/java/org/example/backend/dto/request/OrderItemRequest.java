package org.example.backend.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderItemRequest {
    @Min(value = 0, message = "Product ID must be greater than or equal 0")
    @NotNull(message = "Product ID paid must not be null")
    Long productId;
    @Min(value = 1, message = "Quantity must be greater than 0")
    Integer quantity;
    BigDecimal price;
}
