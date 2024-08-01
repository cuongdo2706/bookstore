package org.example.backend.dto.request;

import jakarta.validation.constraints.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookCreationRequest {
    @NotBlank(message = "Name is required")
    private String name;
    @PositiveOrZero(message = "Quantity must be greater than 0")
    private Integer quantity;
    private String publicId;
    private String url;
    @DecimalMin(value = "1.0",message = "Price must be greater than 0")
    @NotNull(message = "Price is required")
    private BigDecimal defaultPrice;
    private String publisher;
    private String translator;
    private Integer numOfPages;
    private Integer publishedYear;
    private String description;
    private Boolean isActive;
    @NotNull(message = "Author Id is required")
    private Long authorId;
    @NotNull(message = "Category Id is required")
    private Long categoryId;
}
