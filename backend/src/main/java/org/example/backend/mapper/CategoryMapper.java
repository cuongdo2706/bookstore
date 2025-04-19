package org.example.backend.mapper;

import org.example.backend.dto.response.CategoryResponse;
import org.example.backend.entity.Category;

import java.util.List;
import java.util.stream.Collectors;

public class CategoryMapper {
    public static CategoryResponse toCategoryResponse(Category category) {
        return new CategoryResponse(category.getId(), category.getName());
    }

    public static List<CategoryResponse> toCategoryResponses(List<Category> categories) {
        return categories.stream().map(CategoryMapper::toCategoryResponse).collect(Collectors.toList());
    }
}
