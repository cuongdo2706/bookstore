package org.example.backend.controller.manager;

import jakarta.validation.Valid;
import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.request.FilterAttributeRequest;
import org.example.backend.dto.response.CategoryResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("category")
//@PreAuthorize("hasAnyRole('MANAGER','STAFF')")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public SuccessResponse<List<CategoryResponse>> findAll() {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", categoryService.findAll());
    }
//    public List<Category> findPage(@ModelAttribute PageRequest pageRequest) {
//        return categoryService.findAllPage(pageRequest.getPage(), pageRequest.getSize());
//    }

    @GetMapping("/search")
    public SuccessResponse<List<Category>> findByName(@Valid @ModelAttribute FilterAttributeRequest request) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", categoryService.findByName(request.getPage(), request.getSize(), request.getName()));
    }

    @GetMapping("/{id}")
    public SuccessResponse<Category> findById(@PathVariable Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", categoryService.findById(id));
    }

    @PostMapping
    public SuccessResponse<CategoryResponse> save(@RequestBody CreateAttributeRequest request) {
        return new SuccessResponse<>(HttpStatus.CREATED.value(), "Adding data success", categoryService.save(request));
    }

    @PutMapping("/{id}")
    public SuccessResponse<Category> update(@PathVariable Long id, @RequestBody String name) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.ACCEPTED.value(), "Editing data success", categoryService.update(id, name));
    }

    @DeleteMapping("/{id}")
    public SuccessResponse<?> delete(@PathVariable Long id) throws DataNotFoundException {
        categoryService.delete(id);
        return new SuccessResponse<>(HttpStatus.NO_CONTENT.value(), "Deleting data success", null);
    }
}
