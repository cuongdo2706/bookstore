package org.example.backend.dto.request;

import jakarta.validation.constraints.Positive;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductFilterRequest {
    @Positive(message = "Page must be greater than 0")
    Integer page = 1;
    @Positive(message = "Size must be greater than 0")
    Integer size = 10;
    String sortBy = "name";
    Boolean isActive = true;
    String nameOrCodeKeyword = null;

}
