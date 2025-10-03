package org.example.backend.dto.request;

import jakarta.validation.constraints.Positive;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FilterOrderRequest {
    @Positive(message = "Page must be greater than 0")
    Integer page = 1;
    @Positive(message = "Size must be greater than 0")
    Integer size = 10;
    String sortBy = "ord-d";
    Boolean orderType;
    Set<Short> orderStatus = new HashSet<>();
    String orderCodeKeyword = null;
}
