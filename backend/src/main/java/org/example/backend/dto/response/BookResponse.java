package org.example.backend.dto.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.persistence.Column;
import lombok.*;
import org.example.backend.entity.Author;
import org.springframework.beans.factory.annotation.Value;

import java.math.BigDecimal;
import java.time.LocalDateTime;

//@JsonPropertyOrder({"id", "code", "name", "imgUrl", "quantity", "defaultPrice", "sellPrice", "publisher", "translator", "numOfPages", "publishedYear", "status", "description", "author", "category", "createdAt", "updatedAt"})
public record BookResponse(Long id,
                           String code,
                           String name,
                           String imgUrl,
                           Integer quantity,
                           BigDecimal price,
                           BigDecimal sellPrice,
                           String publisher,
                           String translator,
                           Integer numOfPages,
                           Integer publishedYear,
                           Boolean isActive,
                           String description,
                           AuthorResponse author,
                           CategoryResponse category,
                           LocalDateTime createdAt ,
                           LocalDateTime updatedAt) {
    public record AuthorResponse(Long id, String name) {
    }

    public record CategoryResponse(Long id, String name) {
    }
}
