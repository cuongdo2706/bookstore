package org.example.backend.mapper;

import org.example.backend.dto.response.CategoryResponse;
import org.example.backend.entity.Category;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryResponse toCategoryResponse(Category category);
    List<CategoryResponse> toCategoryResponses(List<Category> categories);
}
