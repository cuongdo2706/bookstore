package org.example.backend.dto.request;

import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PropertySearchRequest {
    @PositiveOrZero(message = "Size must be greater than or equal 0")
    Integer size;
    @PositiveOrZero(message = "Size must be greater than or equal 0")
    Integer page;
    String name;
}
