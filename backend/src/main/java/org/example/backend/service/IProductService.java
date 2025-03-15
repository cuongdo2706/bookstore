package org.example.backend.service;

import org.example.backend.dto.request.ProductCreatedRequest;
import org.example.backend.dto.request.ProductUpdatedRequest;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.entity.Product;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IProductService {
    List<ProductResponse> findAll();

    PageResponse<ProductResponse> findAllPage(Integer page, Integer size);

    Product findById(Long id) throws DataNotFoundException;

    PageResponse<ProductResponse> findByCodeOrNameAndSort(Integer page, Integer size, String keyword, String sort);

    Product save(ProductCreatedRequest request, MultipartFile file) throws IOException, DataNotFoundException;

    Product update(Long id, ProductUpdatedRequest request, MultipartFile file) throws IOException, DataNotFoundException;

    void softDelete(Long id);

    Integer getStockQuantity(Long id);

    List<ProductResponse> findAllById(List<Long> ids);
}
