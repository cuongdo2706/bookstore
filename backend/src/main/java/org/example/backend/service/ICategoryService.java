package org.example.backend.service;

import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;


import java.util.List;

public interface ICategoryService {
    List<Category>findAll();

    List<Category> findAllPage(Integer page, Integer size);

    Category findById(Long id) throws DataNotFoundException;

    List<Category>findByName(Integer page,Integer size, String name);

    Category save(String name) throws Exception;

    Category update(Long id, String name) throws DataNotFoundException;

    String delete(Long id) throws DataNotFoundException;
}
