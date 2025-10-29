package org.example.backend.mapper;

import org.example.backend.dto.response.ImageResponse;
import org.example.backend.entity.Image;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ImageMapper {
    ImageResponse toImageResponse(Image image);
}
