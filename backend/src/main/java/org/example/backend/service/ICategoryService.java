package org.example.backend.service;

import org.example.backend.dto.request.PropertyCreationRequest;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICategoryService {
    List<Category>findAll();

    List<Category> findAllPage(Integer page, Integer size);

    Category findById(Long id) throws DataNotFoundException;

    List<Category>findByName(Integer page,Integer size, String name);

    Category save(PropertyCreationRequest request) throws Exception;

    Category update(Long id, PropertyCreationRequest request) throws DataNotFoundException;

    String delete(Long id) throws DataNotFoundException;
}
