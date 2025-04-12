package org.example.backend.dto.request;

import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductFilter {
    @PositiveOrZero(message = "Page must be greater than or equal 0")
    Integer page = 1;
    @PositiveOrZero(message = "Size must be greater than or equal 0")
    Integer size = 10;
    String nameOrCodeKeyword = null;
    String sortBy = "name";
}
