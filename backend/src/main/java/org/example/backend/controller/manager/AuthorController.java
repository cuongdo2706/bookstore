package org.example.backend.controller.manager;

import jakarta.validation.Valid;
import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.request.FilterAttributeRequest;
import org.example.backend.dto.response.AuthorResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Author;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("author")
public class AuthorController {
    @Autowired
    private AuthorService authorService;


    @GetMapping
    public SuccessResponse<List<AuthorResponse>> findAll() {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Data getting success", authorService.findAll());
    }
//    List<Author> findPage(@ModelAttribute PageRequest request) {
//        return authorService.findAllPage(request.getPage(), request.getSize());
//    }

    @GetMapping("/search")
    public SuccessResponse<List<Author>> findByName(@Valid @ModelAttribute FilterAttributeRequest request) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Data getting success", authorService.findByName(request.getPage(), request.getSize(), request.getName()));
    }

    @GetMapping("/{id}")
    public SuccessResponse<AuthorResponse> findById(@PathVariable Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Data getting success", authorService.findAuthorResponseById(id));
    }

    @PostMapping
    public SuccessResponse<AuthorResponse> save(@RequestBody CreateAttributeRequest request) {
        return new SuccessResponse<>(HttpStatus.CREATED.value(), "Data adding success", authorService.save(request));
    }

    @PutMapping("/{id}")
    public SuccessResponse<Author> update(@PathVariable Long id, @RequestBody String name) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.ACCEPTED.value(), "Data editing success", authorService.update(id, name));
    }

    @DeleteMapping("/{id}")
    public SuccessResponse<?> delete(@PathVariable Long id) throws DataNotFoundException {
        authorService.delete(id);
        return new SuccessResponse<>(HttpStatus.NO_CONTENT.value(), "Data deleting success", null);
    }
}
