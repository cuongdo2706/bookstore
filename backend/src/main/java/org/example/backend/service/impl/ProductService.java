package org.example.backend.service.impl;

import org.example.backend.dto.request.ProductCreatedRequest;
import org.example.backend.dto.request.ProductUpdatedRequest;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Product;
import org.example.backend.entity.Category;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.ProductMapper;
import org.example.backend.repository.AuthorRepository;
import org.example.backend.repository.ProductRepository;
import org.example.backend.repository.CategoryRepository;
import org.example.backend.service.IProductService;
import org.example.backend.spec.BookSpec;
import org.example.backend.utility.GenerateCodeUtil;
import org.example.backend.utility.ImageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductMapper productMapper;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private ImageUtil imageUtil;


    @Override
    public List<ProductResponse> findAll() {
        return productMapper.toProductResponses(productRepository.findAll());
    }

    @Override
    public PageResponse<ProductResponse> findAllPage(Integer page, Integer size) {
        if (page < 0) page = 0;
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> books = productRepository.findAllPage(pageable);
        return new PageResponse<ProductResponse>(productMapper.toProductResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
    }

    @Override
    public Product findById(Long id) throws DataNotFoundException {
        return productRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Product not found"));
    }


    @Override
    public PageResponse<ProductResponse> findByCodeOrNameAndSort(Integer page, Integer size, String keyword, String sortInput) {
        if (page < 0) page = 0;
        if (keyword.isEmpty() && sortInput.equals("name-asc")) {
            Pageable pageable = PageRequest.of(page, size);
            Page<Product> books = productRepository.findAllPage(pageable);
            return new PageResponse<ProductResponse>(productMapper.toProductResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
        }
        Specification<Product> spec = BookSpec.findByNameOrCode(keyword);
        Sort sort = null;
        switch (sortInput) {
            case "name-desc" -> sort = Sort.by(Sort.Direction.DESC, "name");
            case "price-asc" -> sort = Sort.by(Sort.Direction.ASC, "sellPrice");
            case "price-desc" -> sort = Sort.by(Sort.Direction.DESC, "sellPrice");
            default -> sort = Sort.by(Sort.Direction.ASC, "name");
        }
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Product> books = productRepository.findAll(spec, pageable);
        return new PageResponse<ProductResponse>(productMapper.toProductResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
    }

    @Override
    public Product save(ProductCreatedRequest request) throws DataNotFoundException {
        Author existAuthor = authorRepository.findById(request.getAuthorId()).orElseThrow(() -> new DataNotFoundException("Author not found"));
        Category existCategory = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> new DataNotFoundException("Category not found"));
        String productCode = GenerateCodeUtil.generateProductCode();
        while (productRepository.existsByCode(productCode)) {
            productCode = GenerateCodeUtil.generateProductCode();
        }
        Product product = productMapper.toCreatedProduct(request, existCategory, existAuthor);
        return productRepository.save(product);
    }

    @Override
    public Product update(Long id, ProductUpdatedRequest request) throws IOException, DataNotFoundException {
        Author existAuthor = null;
        Category existCategory = null;
        if (request.getAuthorId() != null) {
            existAuthor = authorRepository.findById(request.getAuthorId()).orElseThrow(() -> new RuntimeException("Author not found"));
        }
        if (request.getCategoryId() != null) {
            existCategory = categoryRepository.findById(request.getCategoryId()).orElseThrow(() -> new RuntimeException("Category not found"));
        }
        Product existedProduct = findById(id);
        Product updateProduct = productMapper.toUpdatedProduct(existedProduct, request, existCategory, existAuthor);
        return productRepository.save(updateProduct);
    }

    @Override
    @Transactional
    public void softDelete(Long id) {
        productRepository.softDelete(id);
    }

    @Override
    public Integer getQuantity(Long id) {
        return productRepository.getQuantityById(id);
    }
}
