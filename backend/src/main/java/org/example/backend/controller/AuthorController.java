package org.example.backend.controller;

import jakarta.annotation.security.PermitAll;
import org.example.backend.dto.request.PageRequest;
import org.example.backend.dto.request.PropertyCreationRequest;
import org.example.backend.dto.request.PropertySearchRequest;
import org.example.backend.entity.Author;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/author")


public class AuthorController {
    @Autowired
    private IAuthorService authorService;


    @GetMapping
    public List<Author> findAll() {
        return authorService.findAll();
    }
//    List<Author> findPage(@ModelAttribute PageRequest request) {
//        return authorService.findAllPage(request.getPage(), request.getSize());
//    }

    @GetMapping("/search")
    public List<Author> findByName(@ModelAttribute PropertySearchRequest request) {
        return authorService.findByName(request.getPage(), request.getSize(), request.getName());
    }

    @GetMapping("/{id}")
    public Author findById(@PathVariable Long id) throws DataNotFoundException {
        return authorService.findById(id);
    }

    @PostMapping
    public Author save(@RequestBody PropertyCreationRequest request) throws Exception {
        return authorService.save(request);
    }

    @PutMapping("/{id}")
    public Author update(@PathVariable Long id, @RequestBody PropertyCreationRequest request) throws DataNotFoundException {
        return authorService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) throws DataNotFoundException {
        return authorService.delete(id);
    }
}
