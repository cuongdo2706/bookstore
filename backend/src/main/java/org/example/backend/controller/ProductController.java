package org.example.backend.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.example.backend.dto.request.ProductCreatedRequest;
import org.example.backend.dto.request.ProductFilter;
import org.example.backend.dto.request.ProductUpdatedRequest;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Product;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.ProductService;
import org.example.backend.utility.ExcelUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    private ExcelUtil excelUtil;
    @Autowired
    private ProductService productService;

    @GetMapping
    public SuccessResponse<List<ProductResponse>> getAllProducts() {

        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.findAll());
    }

    @GetMapping("/stock/{id}")
    public SuccessResponse<Integer> getProductStock(@PathVariable(name = "id") Long id) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.getStockQuantity(id));
    }

    @GetMapping("/search")
    public SuccessResponse<PageResponse<ProductResponse>> findByCodeOrNameAndSort(@Valid @ModelAttribute ProductFilter request) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.searchProduct(request));
    }


    @GetMapping("/{id}")
    public SuccessResponse<Product> findProductById(@Valid @NotNull(message = "Id must not be null") @PathVariable(name = "id") Long id) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.findById(id));
    }

    @GetMapping("/by-ids")
    public SuccessResponse<List<Product>> findAllByIds(@RequestParam(name = "ids") List<Long> ids) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", productService.findAllById(ids));

    }

    @GetMapping("/export-excel")
    public ResponseEntity<Resource> exportExcel() {
        List<ProductResponse> list = productService.findAll();
        ByteArrayInputStream bais = excelUtil.exportBookExcel(list);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=Danh-sach-san-pham.xlsx");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")).body(new InputStreamResource(bais));
    }

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public SuccessResponse<Product> createBook(@Valid @RequestPart(value = "product") ProductCreatedRequest request, @RequestPart(required = false) MultipartFile file) throws IOException, DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.CREATED.value(), "Adding data success", productService.save(request, file));
    }

    @PutMapping(value = "/{id}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public SuccessResponse<Product> updateBook(@Valid @NotNull(message = "Id must not be null") @PathVariable(name = "id") Long id, @Valid @RequestPart(value = "product") ProductUpdatedRequest request, @RequestPart(required = false) MultipartFile file) throws IOException, DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.ACCEPTED.value(), "Editing data success", productService.update(id, request, file));
    }

    @DeleteMapping("/{id}")
    public SuccessResponse<?> deleteById(@Valid @NotNull(message = "Id must not be null") @PathVariable Long id) throws DataNotFoundException {
        productService.softDelete(id);
        return new SuccessResponse<>(HttpStatus.NO_CONTENT.value(), "Deleting data success", null);
    }
}
