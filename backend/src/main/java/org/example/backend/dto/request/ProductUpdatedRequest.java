package org.example.backend.dto.request;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductUpdatedRequest {
    String name;
    @PositiveOrZero(message = "Quantity must be greater than or equal 0")
    Integer quantity;
    @DecimalMin(value = "1.0", message = "Price must be greater than 0")
    BigDecimal price;
    String publisher;
    String translator;
    @Positive(message = "Number of page must be greater than 0")
    Integer numOfPages;
    Integer publishedYear;
    String description;
    Long authorId;
    Long categoryId;
}
