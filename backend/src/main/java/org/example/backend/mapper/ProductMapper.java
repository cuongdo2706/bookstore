package org.example.backend.mapper;

import org.example.backend.dto.response.*;
import org.example.backend.entity.Product;

import java.util.*;

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

//    public static Product toUpdatedProduct(Product existedProduct, ProductUpdatedRequest request, Category existedCategory, Author existedAuthor) {
//        if (request.getName() != null) {
//            existedProduct.setName(request.getName());
//        }
//        if (request.getQuantity() != null) {
//            existedProduct.setQuantity(request.getQuantity());
//        }
//        if (request.getPrice() != null) {
//            existedProduct.setPrice(request.getPrice());
//        }
//        if (request.getPublisher() != null) {
//            existedProduct.setPublisher(request.getPublisher());
//        }
//        if (request.getTranslator() != null) {
//            existedProduct.setTranslator(request.getTranslator());
//        }
//        if (request.getNumOfPages() != null) {
//            existedProduct.setNumOfPages(request.getNumOfPages());
//        }
//        if (request.getPublishedYear() != null) {
//            existedProduct.setPublishedYear(request.getPublishedYear());
//        }
//        if (request.getDescription() != null) {
//            existedProduct.setDescription(request.getDescription());
//        }
//        if (request.getCategoryId() != null) {
//            existedProduct.setCategory(existedCategory);
//        }
//        if (request.getAuthorId() != null) {
//            existedProduct.setAuthor(existedAuthor);
//        }
//        return existedProduct;
//    }

    public static ProductResponse toProductResponse(Product product) {
        PromotionResponse promotionResponse = null;
        Set<AuthorResponse> authorResponses = new HashSet<>();
        Set<CategoryResponse> categoryResponses = new HashSet<>();
        if (!product.getAuthors().isEmpty()) {
            product.getAuthors().forEach(productAuthor -> {
                AuthorResponse authorResponse = new AuthorResponse(
                        productAuthor.getId(),
                        productAuthor.getName()
                );
                authorResponses.add(authorResponse);
            });
        }
        if (!product.getCategories().isEmpty()) {
            product.getCategories().forEach(productCategory -> {
                CategoryResponse productCategoryResponse = new CategoryResponse(
                        productCategory.getId(),
                        productCategory.getName()
                );
                categoryResponses.add(productCategoryResponse);
            });
        }
        if (!Objects.equals(product.getPromotion(), null)) {
            promotionResponse = new PromotionResponse(
                    product.getPromotion().getId(),
                    product.getPromotion().getCode(),
                    product.getPromotion().getName(),
                    product.getPromotion().getDescription(),
                    product.getPromotion().getStartDate(),
                    product.getPromotion().getEndDate(),
                    product.getPromotion().getPromotionType(),
                    product.getPromotion().getPromotionValue(),
                    product.getPromotion().getIsActive()
            );
        }

        return new ProductResponse(
                product.getId(),
                product.getCode(),
                product.getName(),
                product.getPublicId(),
                product.getImgUrl(),
                product.getQuantity(),
                product.getPrice(),
                product.getTranslator(),
                product.getNumOfPages(),
                product.getPublishedYear(),
                product.getIsActive(),
                product.getDescription(),
                authorResponses,
                categoryResponses,
                product.getPublisher() != null ? PublisherMapper.toPublisherResponse(product.getPublisher()) : null,
                promotionResponse
        );
    }

    public static List<ProductResponse> toProductResponses(List<Product> products) {
        return products.stream()
                .map(ProductMapper::toProductResponse)
                .toList();
    }

//    public static Page<ProductResponse> toProductPageResponse(Page<Product> products) {
//        List<ProductResponse> productResponse = products.stream()
//                .map(ProductMapper::toProductResponse)
//                .toList();
//        return new PageImpl<>(productResponse, PageRequest.of(products.getNumber(), products.getSize()), products.getTotalElements());
//    }
}
