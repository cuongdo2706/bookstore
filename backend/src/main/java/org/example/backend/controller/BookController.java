package org.example.backend.controller;

import jakarta.validation.Valid;
import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.dto.request.BookSearchRequest;
import org.example.backend.dto.request.PageRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.entity.Book;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IBookService;
import org.example.backend.utility.ExcelUtil;
import org.example.backend.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/book")
public class BookController {
    @Autowired
    private ExcelUtil excelUtil;
    @Autowired
    private IBookService bookService;
    @Autowired
    private ImageUtil imageUtil;

    @GetMapping
    public List<BookResponse> getAllBooks(@ModelAttribute PageRequest request) {
        return bookService.findAllPage(request.getPage(), request.getSize());
    }

    @GetMapping("/search")
    public List<BookResponse> findByCodeOrName(@ModelAttribute BookSearchRequest request) {
        return bookService.findByCodeOrName(request.getPage(), request.getSize(), request.getKeyword());
    }

    @GetMapping("/export-excel")
    public ResponseEntity<Resource> exportExcel() {
        List<BookResponse> list = bookService.findAll();
        ByteArrayInputStream bais = excelUtil.exportExcel(list);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=Danh-sach-san-pham.xlsx");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(new InputStreamResource(bais));
    }

    @PostMapping
    public Book createBook(@Valid @ModelAttribute BookCreationRequest request) throws IOException, DataNotFoundException {
        return bookService.save(request);
    }

    @PutMapping("/{id}/soft-delete")
    public String deleteById(@PathVariable Long id) {
        bookService.softDelete(id);
        return "Delete successfully";
    }

    @PutMapping("/bulk-soft-delete")
    public String deleteByIds(@RequestBody List<Long> ids) {
        bookService.softDeleteByIds(ids);
        return "Delete successfully";
    }

}
