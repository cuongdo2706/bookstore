package org.example.backend.dto.request;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookSearchRequest {
    Integer size;
    Integer page;
    String keyword;
    String sort;
}
