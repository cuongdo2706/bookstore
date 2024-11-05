package org.example.backend.service.impl;

import jakarta.validation.Valid;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataExistedException;
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
    public List<Category> findAll() {
        return categoryRepository.findAll();
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
    public List<Category> findByName(Integer page, Integer size, String name) {
        if (page == null || page < 1) page = 1;
        if (size == null) size = 10;
        Pageable pageable = PageRequest.of(page - 1, size);
        return categoryRepository.findByName(pageable, name).getContent();
    }


    @Override
    public Category save(String name) {
        if (categoryRepository.existsByName(name)){
            throw new DataExistedException("Category is already existed");
        }
        Category newCategory = Category.builder()
                .name(name)
                .isDeleted(Boolean.FALSE)
                .build();
        return categoryRepository.save(newCategory);
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
}
