package org.example.backend.service;

import org.example.backend.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICategoryService {
    Page<Category>findAllPage(Integer page);

    Category save();
}
