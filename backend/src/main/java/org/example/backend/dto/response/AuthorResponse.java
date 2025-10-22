package org.example.backend.dto.response;

import java.time.LocalDateTime;

public record AuthorResponse(
        Long id,
        String name,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {
}
