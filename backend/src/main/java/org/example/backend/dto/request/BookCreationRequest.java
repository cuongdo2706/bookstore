package org.example.backend.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookCreationRequest {

    @NotBlank(message = "Name is required")
    String name;
    @PositiveOrZero(message = "Quantity must be greater than 0")
    Integer quantity;
    @JsonProperty("publicId")
    String publicId;
    @JsonProperty("imgUrl")
    String imgUrl;
    @DecimalMin(value = "1.0", message = "Price must be greater than 0")
    @NotNull(message = "Price is required")
    BigDecimal defaultPrice;
    @DecimalMin(value = "1.0", message = "Price must be greater than 0")
    @NotNull(message = "Price is required")
    BigDecimal sellPrice;
    String publisher;
    String translator;
    Integer numOfPages;
    Integer publishedYear;
    String description;
    Boolean isActive;
    @NotNull(message = "Author Id is required")
    Long authorId;
    @NotNull(message = "Category Id is required")
    Long categoryId;
}
