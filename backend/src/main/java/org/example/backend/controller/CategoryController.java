package org.example.backend.controller;

import org.example.backend.dto.request.PropertySearchRequest;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/category")
//@PreAuthorize("hasAnyRole('MANAGER','STAFF')")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @GetMapping
    public List<Category>findAll(){
        return categoryService.findAll();
    }
//    public List<Category> findPage(@ModelAttribute PageRequest pageRequest) {
//        return categoryService.findAllPage(pageRequest.getPage(), pageRequest.getSize());
//    }

    @GetMapping("/search")
    public List<Category> findByName(@ModelAttribute PropertySearchRequest request) {
        return categoryService.findByName(request.getPage(),request.getSize(), request.getName());
    }

    @GetMapping("/{id}")
    public Category findById(@PathVariable Long id) throws DataNotFoundException {
        return categoryService.findById(id);
    }

    @PostMapping
    public Category save(@RequestParam(name = "name") String name) throws Exception {
        return categoryService.save(name);
    }

    @PutMapping("/{id}")
    public Category update(@PathVariable Long id, @RequestBody String name) throws DataNotFoundException {
        return categoryService.update(id, name);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) throws DataNotFoundException {
        return categoryService.delete(id);
    }
}
