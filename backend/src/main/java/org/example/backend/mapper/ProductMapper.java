package org.example.backend.mapper;

import org.example.backend.dto.response.*;
import org.example.backend.entity.Product;
import org.mapstruct.Mapper;

import java.util.*;

@Mapper(componentModel = "spring",
        uses = {
                CategoryMapper.class,
                AuthorMapper.class,
                PublisherMapper.class,
                ProductMapper.class,
                ImageMapper.class
        })
public interface ProductMapper {
    ProductResponse toProductResponse(Product product);

    List<ProductResponse> toProductResponses(List<Product> products);

//    public static Page<ProductResponse> toProductPageResponse(Page<Product> products) {
//        List<ProductResponse> productResponse = products.stream()
//                .map(ProductMapper::toProductResponse)
//                .toList();
//        return new PageImpl<>(productResponse, PageRequest.of(products.getNumber(), products.getSize()), products.getTotalElements());
//    }
}
