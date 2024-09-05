package org.example.backend.controller;

import jakarta.validation.Valid;
import org.example.backend.dto.request.BookCreationRequest;
import org.example.backend.dto.request.BookSearchRequest;
import org.example.backend.dto.request.PageRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.entity.Book;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IBookService;
import org.example.backend.utility.ExcelUtil;
import org.example.backend.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.web.PagedModel;
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
    public PageResponse<BookResponse> getAllBooks(@RequestParam(defaultValue = "0", name = "page") Integer page,
                                                  @RequestParam(defaultValue = "10", name = "size") Integer size) {

        return bookService.findAllPage(page, size);
    }

    @GetMapping("/search")
    public PageResponse<BookResponse> findByCodeOrNameAndSort(@RequestParam(defaultValue = "0", name = "page") Integer page,
                                                        @RequestParam(defaultValue = "10", name = "size") Integer size,
                                                        @RequestParam(defaultValue = "",name = "keyword") String keyword,
                                                        @RequestParam(defaultValue = "name-asc",name = "sort") String sort
                                                        ) {
        return bookService.findByCodeOrNameAndSort(page,size,keyword,sort);
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

        return bookService.softDelete(id);
    }

    @PutMapping("/bulk-soft-delete")
    public String deleteByIds(@RequestBody List<Long> ids) {

        return bookService.softDeleteByIds(ids);
    }

}
