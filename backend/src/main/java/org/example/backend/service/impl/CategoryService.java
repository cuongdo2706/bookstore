package org.example.backend.service.impl;

import org.example.backend.entity.Category;
import org.example.backend.repository.CategoryRepository;
import org.example.backend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public Page<Category> findAllPage(Integer page) {
        if (page < 1) page = 1;
        Pageable pageable = PageRequest.of(page - 1, 10);
        return categoryRepository.findAllPage(pageable);
    }
}
