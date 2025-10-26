package org.example.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.response.CategoryResponse;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.CategoryMapper;
import org.example.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements org.example.backend.service.CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Override
    public List<CategoryResponse> findAll() {
        return categoryMapper.toCategoryResponses(categoryRepository.findAllByOrderByNameAsc());
    }

    @Override
    public List<Category> findAllPage(Integer page, Integer size) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return categoryRepository.findAllPage(pageable).getContent();
    }

    @Override
    public Category findById(Long id) throws DataNotFoundException {
        return categoryRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Category not found: " + id));
    }

    @Override
    public CategoryResponse findCategoryResponseById(Long id) throws DataNotFoundException {
        return categoryMapper.toCategoryResponse(findById(id));
    }

    @Override
    public List<Category> findByName(Integer page, Integer size, String name) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return categoryRepository.findByName(pageable, name).getContent();
    }


    @Override
    public CategoryResponse save(CreateAttributeRequest request) {
        if (categoryRepository.existsByName(request.getName())) {
            throw new DataExistedException("Category is already existed");
        }
        Category newCategory = Category.builder()
                .name(request.getName())
                .build();
        return categoryMapper.toCategoryResponse(categoryRepository.save(newCategory));
    }

    @Override
    public Category update(Long id, String name) throws DataNotFoundException {
        Category existedCategory = findById(id);
        existedCategory.setName(name);
        return categoryRepository.save(existedCategory);
    }

    @Override
    public void delete(Long id) throws DataNotFoundException {
        Category existedCategory = findById(id);
        existedCategory.setIsDeleted(true);
    }

    @Override
    public List<Category> findAllByIds(Set<Long> ids) {
        return categoryRepository.findAllById(ids);
    }
}
