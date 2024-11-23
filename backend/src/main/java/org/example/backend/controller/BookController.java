package org.example.backend.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.PositiveOrZero;
import org.example.backend.dto.request.BookCreatedRequest;
import org.example.backend.dto.request.BookUpdatedRequest;
import org.example.backend.dto.response.BookResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Book;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IBookService;
import org.example.backend.utility.ExcelUtil;
import org.example.backend.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("book")
public class BookController {
    @Autowired
    private ExcelUtil excelUtil;
    @Autowired
    private IBookService bookService;
    @Autowired
    private ImageUtil imageUtil;

    @GetMapping
    public SuccessResponse<PageResponse<BookResponse>> getAllBooks(@Valid @RequestParam(defaultValue = "0", name = "page") @PositiveOrZero(message = "Page must be greater than or equal 0") Integer page,
                                                                   @Valid @RequestParam(defaultValue = "10", name = "size") @PositiveOrZero(message = "Size must be greater than or equal 0") Integer size) {

        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", bookService.findAllPage(page, size));
    }

    @GetMapping("/search")
    public SuccessResponse<PageResponse<BookResponse>> findByCodeOrNameAndSort(@Valid @RequestParam(defaultValue = "0", name = "page") @PositiveOrZero(message = "Page must be greater than or equal 0") Integer page,
                                                                               @Valid @RequestParam(defaultValue = "10", name = "size") @PositiveOrZero(message = "Size must be greater than or equal 0") Integer size,
                                                                               @RequestParam(defaultValue = "", name = "keyword") String keyword,
                                                                               @RequestParam(defaultValue = "name-asc", name = "sort") String sort
    ) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", bookService.findByCodeOrNameAndSort(page, size, keyword, sort));
    }

    @GetMapping("/{id}")
    public SuccessResponse<Book> getBookById(@PathVariable Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success",bookService.findById(id));
    }

    @GetMapping("/export-excel")
    public ResponseEntity<Resource> exportExcel() {
        List<BookResponse> list = bookService.findAll();
        ByteArrayInputStream bais = excelUtil.exportBookExcel(list);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=Danh-sach-san-pham.xlsx");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(new InputStreamResource(bais));
    }

    @PostMapping
    public SuccessResponse<Book> createBook(@RequestBody BookCreatedRequest request) throws IOException, DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.CREATED.value(), "Adding data success", bookService.save(request));
    }

    @PutMapping("/{id}")
    public SuccessResponse<Book> updateBook(@PathVariable(name = "id") Long id, @RequestBody BookUpdatedRequest request) throws IOException, DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.ACCEPTED.value(), "Editing data success", bookService.update(id, request));
    }

    @DeleteMapping("/{id}")
    public SuccessResponse<?> deleteById(@PathVariable Long id) {
        bookService.softDelete(id);
        return new SuccessResponse<>(HttpStatus.NO_CONTENT.value(), "Deleting data success", null);
    }
}
