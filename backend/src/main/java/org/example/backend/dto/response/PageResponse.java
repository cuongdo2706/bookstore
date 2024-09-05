package org.example.backend.dto.response;

import java.util.List;

public record PageResponse<T>(List<T> content, Integer page, Integer size, Long totalElements, Integer totalPages) {
}
