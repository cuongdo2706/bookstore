package org.example.backend.service;

import org.example.backend.dto.response.CategoryResponse;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;


import java.util.List;
import java.util.Set;

public interface CategoryService {
    List<CategoryResponse> findAll();

    List<Category> findAllPage(Integer page, Integer size);

    Category findById(Long id) throws DataNotFoundException;

    CategoryResponse findCategoryResponseById(Long id) throws DataNotFoundException;

    List<Category> findByName(Integer page, Integer size, String name);

    CategoryResponse save(String name) throws DataExistedException;

    Category update(Long id, String name) throws DataNotFoundException;

    void delete(Long id) throws DataNotFoundException;

    Set<Category> findAllByIds(Set<Long> ids);
}
