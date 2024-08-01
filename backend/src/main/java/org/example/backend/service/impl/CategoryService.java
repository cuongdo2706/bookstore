package org.example.backend.service.impl;

import jakarta.validation.Valid;
import org.example.backend.dto.request.PropertyCreationRequest;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.repository.CategoryRepository;
import org.example.backend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAllPage(Integer page, Integer size) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return categoryRepository.findAllPage(pageable).getContent();
    }

    @Override
    public Category findById(Long id) throws DataNotFoundException {
        return categoryRepository.findById(id).orElseThrow(() -> new DataNotFoundException("category not found: " + id));
    }

    @Override
    public List<Category> findByName(Integer page, Integer size, String name) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return categoryRepository.findByName(pageable, name).getContent();
    }


    @Override
    public Category save(@Valid PropertyCreationRequest request) throws Exception {
        if (categoryRepository.existsByName(request.getName())) {
            throw new Exception("Username already exists");
        }
        Category newCategory = Category.builder()
                .name(request.getName())
                .isDeleted(Boolean.FALSE)
                .build();
        return categoryRepository.save(newCategory);
    }

    @Override
    public Category update(Long id, PropertyCreationRequest request) throws DataNotFoundException {
        Category existedCategory = findById(id);
        existedCategory.setName(request.getName());
        return categoryRepository.save(existedCategory);
    }

    @Override
    public String delete(Long id) throws DataNotFoundException {
        Category existedCategory = findById(id);
        existedCategory.setIsDeleted(true);
        return "Delete succeed";
    }


}
