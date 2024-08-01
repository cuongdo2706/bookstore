package org.example.backend.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookSearchRequest {
    private Integer size;
    private Integer page;
    private String keyword;
}
