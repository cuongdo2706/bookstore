package org.example.backend.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductCreatedRequest implements Serializable {
    @NotBlank(message = "Name must have more than 1 digit")
    @NotNull(message = "Name cannot be null")
    String name;

    @PositiveOrZero(message = "Quantity must be greater than or equal 0")
    @NotNull(message = "Quantity must not be null")
    Integer quantity;

    @DecimalMin(value = "1.0", message = "Price must be greater than 0")
    @NotNull(message = "Price is required")
    BigDecimal price;

    String publisher;

    String translator;

    @Positive(message = "Number of page must be greater than 0")
    Integer numOfPages;

    Integer publishedYear;

    String description;

    @NotNull(message = "Author Id is required")
    @Positive(message = "Author Id must be greater than 0")
    Long authorId;

    @NotNull(message = "Category Id is required")
    @Positive(message = "Category Id must be greater than 0")
    Long categoryId;
}
