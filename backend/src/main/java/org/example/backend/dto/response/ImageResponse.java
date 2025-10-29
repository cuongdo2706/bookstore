package org.example.backend.dto.response;

import java.time.LocalDateTime;

public record ImageResponse(
        String relativePath,
        String publicId,
        String fileExtension,
        String originalName,
        Long fileSize,
        Integer width,
        Integer height,
        String contentType,
        LocalDateTime createdAt,
        LocalDateTime updatedAt) {
}
