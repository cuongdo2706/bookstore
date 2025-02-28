package org.example.backend.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.PositiveOrZero;
import org.example.backend.dto.request.ProductCreatedRequest;
import org.example.backend.dto.request.ProductUpdatedRequest;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Product;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IProductService;
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
@RequestMapping("product")
public class ProductController {
    @Autowired
    private ExcelUtil excelUtil;
    @Autowired
    private IProductService productService;

    @GetMapping
    public SuccessResponse<PageResponse<ProductResponse>> getAllProducts(@Valid @RequestParam(defaultValue = "0", name = "page") @PositiveOrZero(message = "Page must be greater than or equal 0") Integer page,
                                                                         @Valid @RequestParam(defaultValue = "10", name = "size") @PositiveOrZero(message = "Size must be greater than or equal 0") Integer size) {

        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.findAllPage(page, size));
    }

    @GetMapping("/stock/{id}")
    public SuccessResponse<Integer> getProductStock(@PathVariable(name = "id") Long id) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.getStockQuantity(id));
    }

    @GetMapping("/search")
    public SuccessResponse<PageResponse<ProductResponse>> findByCodeOrNameAndSort(@Valid @RequestParam(defaultValue = "0", name = "page") @PositiveOrZero(message = "Page must be greater than or equal 0") Integer page,
                                                                                  @Valid @RequestParam(defaultValue = "10", name = "size") @PositiveOrZero(message = "Size must be greater than or equal 0") Integer size,
                                                                                  @RequestParam(defaultValue = "", name = "keyword") String keyword,
                                                                                  @RequestParam(defaultValue = "name-asc", name = "sort") String sort
    ) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.findByCodeOrNameAndSort(page, size, keyword, sort));
    }

    @GetMapping("/{id}")
    public SuccessResponse<Product> findProductById(@PathVariable(name = "id") Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.findById(id));
    }

    @GetMapping("/by-ids")
    public SuccessResponse<List<ProductResponse>> findAllByIds(@RequestParam(name = "ids") List<Long> ids){
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.findAllById(ids));

    }

    @GetMapping("/export-excel")
    public ResponseEntity<Resource> exportExcel() {
        List<ProductResponse> list = productService.findAll();
        ByteArrayInputStream bais = excelUtil.exportBookExcel(list);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=Danh-sach-san-pham.xlsx");
        return ResponseEntity.ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(new InputStreamResource(bais));
    }

    @PostMapping
    public SuccessResponse<Product> createBook(@Valid @RequestBody ProductCreatedRequest request) throws IOException, DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.CREATED.value(), "Adding data success", productService.save(request));
    }

    @PutMapping("/{id}")
    public SuccessResponse<Product> updateBook(@PathVariable(name = "id") Long id, @Valid @RequestBody ProductUpdatedRequest request) throws IOException, DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.ACCEPTED.value(), "Editing data success", productService.update(id, request));
    }

    @DeleteMapping("/{id}")
    public SuccessResponse<?> deleteById(@PathVariable Long id) {
        productService.softDelete(id);
        return new SuccessResponse<>(HttpStatus.NO_CONTENT.value(), "Deleting data success", null);
    }
}
