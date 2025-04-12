package org.example.backend.repository.custom;

import org.example.backend.dto.request.ProductFilter;
import org.springframework.data.domain.Page;

import java.util.Map;


public interface ProductRepositoryCustom {
    Page<Object[]> searchProduct(ProductFilter filter);
}
