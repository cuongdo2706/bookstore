package org.example.backend.service.impl;

import org.example.backend.dto.request.ProductCreatedRequest;
import org.example.backend.dto.request.ProductUpdatedRequest;
import org.example.backend.dto.response.ImageResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Category;
import org.example.backend.entity.Product;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.ProductMapper;
import org.example.backend.repository.ProductRepository;
import org.example.backend.service.IAuthorService;
import org.example.backend.service.ICategoryService;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

@Service
public class ProductService implements IProductService {


    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ICategoryService categoryService;

    @Autowired
    private IAuthorService authorService;

    @Autowired
    private ImageUtil imageUtil;


    @Override
    public List<ProductResponse> findAll() {
        return ProductMapper.toProductResponses(productRepository.findAll());
    }

    @Override
    public PageResponse<ProductResponse> findAllPage(Integer page, Integer size) {
        if (page < 0) page = 0;
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> books = productRepository.findAllPage(pageable);
        return new PageResponse<ProductResponse>(ProductMapper.toProductResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
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
            return new PageResponse<>(ProductMapper.toProductResponses(books.getContent()), books.getNumber(), books.getSize(), books.getTotalElements(), books.getTotalPages());
        }
        Specification<Product> spec = BookSpec.findByNameOrCode(keyword);
        Sort sort = null;
        switch (sortInput) {
            case "name-desc" -> sort = Sort.by(Sort.Direction.DESC, "name");
            case "price-asc" -> sort = Sort.by(Sort.Direction.ASC, "price");
            case "price-desc" -> sort = Sort.by(Sort.Direction.DESC, "price");
            default -> sort = Sort.by(Sort.Direction.ASC, "name");
        }
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Product> books = productRepository.findAll(spec, pageable);
        return new PageResponse<>(
                ProductMapper.toProductResponses(books.getContent()),
                books.getNumber(),
                books.getSize(),
                books.getTotalElements(),
                books.getTotalPages());
    }

    @Override
    public Product save(ProductCreatedRequest request, MultipartFile file) throws DataNotFoundException, IOException {
        ImageResponse imageResponse = null;
        if (file != null && !file.isEmpty()) {
            imageResponse = imageUtil.upload(file);
        }
        Author existedAuthor = authorService.findById(request.getAuthorId());
        Category existedCategory = categoryService.findById(request.getCategoryId());
        String productCode = GenerateCodeUtil.generateProductCode();
        while (productRepository.existsByCode(productCode)) {
            productCode = GenerateCodeUtil.generateProductCode();
        }
        Product product = Product.builder()
                .code(productCode)
                .name(request.getName())
                .quantity(request.getQuantity())
                .publicId(imageResponse == null ? null : imageResponse.publicId())
                .imgUrl(imageResponse == null ? null : imageResponse.imgUrl())
                .price(request.getPrice())
                .publisher(request.getPublisher())
                .translator(request.getTranslator())
                .numOfPages(request.getNumOfPages())
                .publishedYear(request.getPublishedYear())
                .description(request.getDescription())
                .isActive(true)
                .isDeleted(false)
                .category(existedCategory)
                .author(existedAuthor)
                .build();
        return productRepository.save(product);
    }

    @Override
    public Product update(Long id, ProductUpdatedRequest request, MultipartFile file) throws IOException, DataNotFoundException {
        Product existedProduct = findById(id);
        if (request.getName() != null && !Objects.equals(request.getName(), existedProduct.getName())) {
            existedProduct.setName(request.getName());
        }
        if (request.getQuantity() != null && !Objects.equals(request.getQuantity(), existedProduct.getQuantity())) {
            existedProduct.setQuantity(request.getQuantity());
        }
        if (request.getPrice() != null && request.getPrice().compareTo(existedProduct.getPrice()) != 0) {
            existedProduct.setPrice(request.getPrice());
        }
        if (!Objects.equals(request.getPublisher(), existedProduct.getPublisher())) {
            existedProduct.setPublisher(request.getPublisher());
        }
        if (!Objects.equals(request.getTranslator(), existedProduct.getTranslator())) {
            existedProduct.setTranslator(request.getTranslator());
        }
        if (!Objects.equals(request.getNumOfPages(), existedProduct.getNumOfPages())) {
            existedProduct.setNumOfPages(request.getNumOfPages());
        }
        if (!Objects.equals(request.getPublisher(), existedProduct.getPublisher())) {
            existedProduct.setPublishedYear(request.getPublishedYear());
        }
        if (!Objects.equals(request.getDescription(), existedProduct.getDescription())) {
            existedProduct.setDescription(request.getDescription());
        }
        if (request.getCategoryId() != null && !Objects.equals(request.getCategoryId(), existedProduct.getCategory().getId())) {
            Category existedCategory = categoryService.findById(request.getCategoryId());
            existedProduct.setCategory(existedCategory);
        }
        if (request.getAuthorId() != null && !Objects.equals(request.getAuthorId(), existedProduct.getAuthor().getId())) {
            Author existedAuthor = authorService.findById(request.getAuthorId());
            existedProduct.setAuthor(existedAuthor);
        }
        if (file != null && !file.isEmpty()) {
            ImageResponse imageResponse;
            if (existedProduct.getPublicId() != null) {
                imageResponse = imageUtil.update(existedProduct.getPublicId(), file);
            } else {
                imageResponse = imageUtil.upload(file);
            }
            existedProduct.setPublicId(imageResponse.publicId());
            existedProduct.setImgUrl(imageResponse.imgUrl());
        }
        return productRepository.save(existedProduct);
    }

    @Override
    @Transactional
    public void softDelete(Long id) {
        productRepository.softDelete(id);
    }

    @Override
    public Integer getStockQuantity(Long id) {
        return productRepository.getStockQuantity(id);
    }

    @Override
    public List<ProductResponse> findAllById(List<Long> ids) {
        List<Product> products = productRepository.findAllById(ids);
        return ProductMapper.toProductResponses(products);
    }


}
