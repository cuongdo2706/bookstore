package org.example.backend.mapper;

import org.example.backend.dto.request.ProductUpdatedRequest;
import org.example.backend.dto.response.AuthorResponse;
import org.example.backend.dto.response.CategoryResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.dto.response.PromotionResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Category;
import org.example.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public class ProductMapper {
//    public static Product toCreatedProduct(ProductCreatedRequest request, Category existedCategory, Author existedAuthor) {
//        Product product = new Product();
//        product.setCode(GenerateCodeUtil.generateProductCode());
//        product.setName(request.getName());
//        product.setQuantity(request.getQuantity());
//
//        product.setPrice(request.getPrice());
//        if (request.getPublisher() != null) {
//            product.setPublisher(request.getPublisher());
//        }
//        if (request.getTranslator() != null) {
//            product.setTranslator(request.getTranslator());
//        }
//        if (request.getNumOfPages() != null) {
//            product.setNumOfPages(request.getNumOfPages());
//        }
//        if (request.getPublishedYear() != null) {
//            product.setPublishedYear(request.getPublishedYear());
//        }
//        if (request.getDescription() != null) {
//            product.setDescription(request.getDescription());
//        }
//        product.setIsActive(true);
//        product.setIsDeleted(false);
//        product.setCategory(existedCategory);
//        product.setAuthor(existedAuthor);
//        return product;
//    }

    public static Product toUpdatedProduct(Product existedProduct, ProductUpdatedRequest request, Category existedCategory, Author existedAuthor) {
        if (request.getName() != null) {
            existedProduct.setName(request.getName());
        }
        if (request.getQuantity() != null) {
            existedProduct.setQuantity(request.getQuantity());
        }
        if (request.getPrice() != null) {
            existedProduct.setPrice(request.getPrice());
        }
        if (request.getPublisher() != null) {
            existedProduct.setPublisher(request.getPublisher());
        }
        if (request.getTranslator() != null) {
            existedProduct.setTranslator(request.getTranslator());
        }
        if (request.getNumOfPages() != null) {
            existedProduct.setNumOfPages(request.getNumOfPages());
        }
        if (request.getPublishedYear() != null) {
            existedProduct.setPublishedYear(request.getPublishedYear());
        }
        if (request.getDescription() != null) {
            existedProduct.setDescription(request.getDescription());
        }
        if (request.getCategoryId() != null) {
            existedProduct.setCategory(existedCategory);
        }
        if (request.getAuthorId() != null) {
            existedProduct.setAuthor(existedAuthor);
        }
        return existedProduct;
    }

    public static ProductResponse toProductResponse(Object[] product) {
        PromotionResponse promotionResponse = null;
        AuthorResponse authorResponse = null;
        CategoryResponse categoryResponse = null;
        if (!Objects.equals(product[12], null)) {
            authorResponse = new AuthorResponse(
                    (Long) product[12],
                    (String) product[13]
            );
        }
        if (!Objects.equals(product[14], null)) {
            categoryResponse = new CategoryResponse(
                    (Long) product[14],
                    (String) product[15]
            );
        }
        if (!Objects.equals(product[16], null)) {
            promotionResponse = new PromotionResponse(
                    (Long) product[16],
                    (String) product[17],
                    (String) product[18],
                    (String) product[19],
                    (LocalDate) product[20],
                    (LocalDate) product[21],
                    (String) product[22],
                    (BigDecimal) product[23],
                    (Boolean) product[24]
            );
        }
        return new ProductResponse(
                (Long) product[0],
                (String) product[1],
                (String) product[2],
                (String) product[3],
                (Integer) product[4],
                (BigDecimal) product[5],
                (String) product[6],
                (String) product[7],
                (Integer) product[8],
                (Integer) product[9],
                (Boolean) product[10],
                (String) product[11],
                authorResponse,
                categoryResponse,
                promotionResponse
        );
    }

    public static List<ProductResponse> toProductResponses(List<Object[]> products) {
        return products.stream()
                .map(ProductMapper::toProductResponse)
                .toList();
    }

    public static Page<ProductResponse> toProductPageResponse(Page<Object[]> products) {
        List<ProductResponse> productResponse = products.stream()
                .map(ProductMapper::toProductResponse)
                .toList();
        return new PageImpl<>(productResponse, PageRequest.of(products.getNumber(), products.getSize()), products.getTotalElements());
    }
}
