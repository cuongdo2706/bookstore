package org.example.backend.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Set;

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

    @NotNull(message = "Author Ids is required")
    @NotEmpty(message = "Must be at least 1 id provided")
    Set<@Positive(message = "Each Author Id must be greater than 0") Long> authorIds;

    @NotNull(message = "Category Ids is required")
    @NotEmpty(message = "Must be at least 1 id provided")
    Set<@Positive(message = "Each Category Id must be greater than 0") Long> categoryIds;
}
