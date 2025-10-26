package org.example.backend.dto.response;

import java.time.LocalDateTime;

public record ImageResponse(
        String publicId,
        String imgUrl,
        String relativePath,
        String fileExtension,
        String originalName,
        Long fileSize,
        Integer width,
        Integer height,
        String contentType,
        LocalDateTime createdAt) {
}
