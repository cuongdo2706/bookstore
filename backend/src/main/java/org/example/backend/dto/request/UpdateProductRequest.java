package org.example.backend.dto.request;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UpdateProductRequest {
    String code;
    String name;
    @PositiveOrZero(message = "Quantity must be greater than or equal 0")
    Integer quantity;
    @DecimalMin(value = "1.0", message = "Price must be greater than 0")
    BigDecimal price;
    Long publisher;
    String translator;
    @Positive(message = "Number of page must be greater than 0")
    Integer numOfPages;
    Integer publishedYear;
    String description;
    Set<@Positive(message = "Each Author Id must be greater than 0") Long> authorIds;
    Set<@Positive(message = "Each Author Id must be greater than 0") Long> categoryIds;
}
