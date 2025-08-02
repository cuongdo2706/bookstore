package org.example.backend.service;

import org.example.backend.dto.request.ProductCreatedRequest;
import org.example.backend.dto.request.ProductFilterRequest;
import org.example.backend.dto.request.ProductUpdatedRequest;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.entity.Product;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;

public interface ProductService {
    List<Product> findAll();

    List<ProductResponse> findAllProductResponse();

    Product findById(Long id) throws DataNotFoundException;

    ProductResponse findProductResponseById(Long id) throws DataNotFoundException;

    PageResponse<ProductResponse> searchProduct(ProductFilterRequest productFilter);

    ProductResponse save(ProductCreatedRequest request, MultipartFile file) throws IOException, DataNotFoundException;

    List<Product> saveAll(List<Product> products) throws DataNotFoundException;

    ProductResponse update(Long id, ProductUpdatedRequest request, MultipartFile file) throws IOException, DataNotFoundException;

    void softDelete(Long id) throws DataNotFoundException;

    Integer getStockQuantity(Long id);

    List<Product> findAllByIds(Set<Long> ids);

    List<ProductResponse> findAllProductResponseByIds(Set<Long> ids);

    Boolean existedByIdNotDeleted(Long id);
}
