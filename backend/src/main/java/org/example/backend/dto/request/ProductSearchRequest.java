package org.example.backend.dto.request;

import jakarta.validation.constraints.PositiveOrZero;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductSearchRequest {
    @PositiveOrZero(message = "Size must be greater than or equal 0")
    Integer size;
    @PositiveOrZero(message = "Page must be greater than or equal 0")
    Integer page;
    String keyword;
    String sort;
}
