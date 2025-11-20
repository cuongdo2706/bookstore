package org.example.backend.dto.request;

import jakarta.validation.constraints.*;
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
    @NotBlank(message = "Tên không được để trống")
    String code;
    @NotBlank(message = "Tên không được để trống")
    String name;
    @NotNull(message = "Số lượng không được để trống")
    @PositiveOrZero(message = "Số lượng phải >= 0")
    Integer quantity;
    @NotNull(message = "Giá không được để trống")
    @DecimalMin(value = "1.0", message = "Giá phải > 0")
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
