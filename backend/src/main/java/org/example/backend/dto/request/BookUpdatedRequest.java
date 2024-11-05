package org.example.backend.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookUpdatedRequest {
    String name;
    @PositiveOrZero(message = "Quantity must be greater than or equal 0")
    Integer quantity;
    @JsonProperty("publicId")
    String publicId;
    @JsonProperty("imgUrl")
    String imgUrl;
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
    Long authorId;
    @NotNull(message = "Category Id is required")
    Long categoryId;
}
