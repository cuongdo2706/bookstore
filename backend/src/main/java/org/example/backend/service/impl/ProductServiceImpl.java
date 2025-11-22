package org.example.backend.service.impl;

import jakarta.persistence.OptimisticLockException;
import lombok.RequiredArgsConstructor;
import org.example.backend.dto.request.CreateProductRequest;
import org.example.backend.dto.request.FilterProductRequest;
import org.example.backend.dto.request.UpdateProductRequest;
import org.example.backend.dto.response.ImageResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.entity.*;
import org.example.backend.exception.DataExistedException;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.ProductMapper;
import org.example.backend.repository.ProductRepository;
import org.example.backend.service.*;
import org.example.backend.specification.ProductSpecification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final AuthorService authorService;
    private final PublisherService publisherService;
    private final SequenceService sequenceService;
    private final ImageService imageService;
    private final ProductMapper productMapper;
    private static final String PRODUCT_DEFAULT_PATH = "product";

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public List<ProductResponse> findAllProductResponse() {
        return productMapper.toProductResponses(findAll());
    }


    @Override
    public Product findById(Long id) throws DataNotFoundException {
        return productRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Product Not Found"));
    }

    @Override
    public ProductResponse findProductResponseById(Long id) throws DataNotFoundException {
        return productMapper.toProductResponse(findById(id));
    }

    @Override
    public PageResponse<ProductResponse> searchProduct(FilterProductRequest filter) {
        Specification<Product> spec = Specification.unrestricted();
        if (!Objects.equals(filter.getNameOrCodeKeyword(), null) && !filter.getNameOrCodeKeyword().isBlank())
            spec = spec.and(ProductSpecification.nameOrCodeContains(filter.getNameOrCodeKeyword()));
        if (filter.getAuthorIds() != null && !filter.getAuthorIds().isEmpty())
            spec = spec.and(ProductSpecification.authorIn(filter.getAuthorIds()));
        if (filter.getCategoryIds() != null && !filter.getCategoryIds().isEmpty())
            spec = spec.and(ProductSpecification.categoryIn(filter.getCategoryIds()));
        if (filter.getPublisherIds() != null && !filter.getPublisherIds().isEmpty())
            spec = spec.and(ProductSpecification.publisherIn(filter.getPublisherIds()));
        if (!Objects.equals(filter.getIsPublished(), null))
            spec = spec.and(ProductSpecification.isPublished(filter.getIsPublished()));
        Sort sort = switch (filter.getSortBy()) {
            case "name" -> Sort.by(Sort.Direction.ASC, "name");
            case "name-d" -> Sort.by(Sort.Direction.DESC, "name");
            case "price" -> Sort.by(Sort.Direction.ASC, "price");
            case "price-d" -> Sort.by(Sort.Direction.DESC, "price");
            default -> throw new RuntimeException("Mục sắp xếp không hợp lệ: " + filter.getSortBy());
        };
        Pageable pageable = PageRequest.of(filter.getPage() - 1, filter.getSize(), sort);
        Page<Product> products = productRepository.findAll(spec, pageable);
        return new PageResponse<>(productMapper.toProductResponses(products.getContent()), products.getNumber(), products.getSize(), products.getTotalElements(), products.getTotalPages());
    }

    @Transactional
    @Override
    public ProductResponse save(CreateProductRequest request, MultipartFile file) throws DataNotFoundException, IOException {
        Image image = null;
        if (file != null && !file.isEmpty()) {
            image = imageService.upload(file, PRODUCT_DEFAULT_PATH);
        }
        Set<Author> existedAuthors = new HashSet<>(authorService.findAllByIds(request.getAuthorIds()));
        Set<Category> existedCategories = new HashSet<>(categoryService.findAllByIds(request.getCategoryIds()));
        Publisher existedPublisher = publisherService.findById(request.getPublisherId());
        String productCode;
        if (request.getCode() == null || request.getCode().isBlank())
            productCode = sequenceService.generateProductCode();
        else {
            if (productRepository.existsByCode(request.getCode())) {
                throw new DataExistedException("Mã này đã tồn tại, hãy dùng mã khác");
            }
            productCode = request.getCode();
        }
        Product product = Product.builder()
                .code(productCode)
                .name(request.getName())
                .quantity(request.getQuantity())
                .price(request.getPrice())
                .publisher(existedPublisher)
                .translator(request.getTranslator())
                .numOfPages(request.getNumOfPages())
                .publishedYear(request.getPublishedYear())
                .description(request.getDescription())
                .categories(existedCategories)
                .isDeleted(Boolean.FALSE)
                .isPublished(Boolean.TRUE)
                .authors(existedAuthors)
                .build();
        if (image != null) {
            product.setImage(image);
        }
        return productMapper.toProductResponse(productRepository.save(product));

    }

    @Override
    public List<Product> saveAll(List<Product> products) {
        return productRepository.saveAll(products);
    }

    @Transactional
    @Override
    public ProductResponse update(Long id, UpdateProductRequest request, MultipartFile file) throws Exception {
        Product existedProduct = findById(id);
        if (request.getCode() != null) {
            if (productRepository.existsByCode(request.getCode())) {
                throw new DataExistedException("Mã này đã tồn tại, hãy dùng mã khác");
            }
            existedProduct.setCode(request.getCode());
        }
        if (request.getName() != null) existedProduct.setName(request.getName());
        if (request.getQuantity() != null) existedProduct.setQuantity(request.getQuantity());
        if (request.getPrice() != null) existedProduct.setPrice(request.getPrice());
        if (request.getPublisher() != null) {
            Publisher publisher = publisherService.findById(request.getPublisher());
            existedProduct.setPublisher(publisher);
        }
        existedProduct.setTranslator(request.getTranslator());
        existedProduct.setNumOfPages(request.getNumOfPages());
        existedProduct.setPublishedYear(request.getPublishedYear());
        existedProduct.setDescription(request.getDescription());
        if (!request.getCategoryIds().equals(existedProduct.getCategories().stream().map(Category::getId).collect(Collectors.toSet()))) {
            Set<Category> existedCategories = new HashSet<>(categoryService.findAllByIds(request.getCategoryIds()));
            existedProduct.setCategories(existedCategories);
        }
        if (!request.getAuthorIds().equals(existedProduct.getAuthors().stream().map(Author::getId).collect(Collectors.toSet()))) {
            Set<Author> existedAuthors = new HashSet<>(authorService.findAllByIds(request.getAuthorIds()));
            existedProduct.setAuthors(existedAuthors);
        }
        if (file != null && !file.isEmpty()) {
            if (existedProduct.getImage() != null) {
                imageService.update(file, existedProduct.getImage());
            } else {
                existedProduct.setImage(imageService.upload(file, PRODUCT_DEFAULT_PATH));
            }
        }
        try {
            return productMapper.toProductResponse(productRepository.save(existedProduct));
        } catch (OptimisticLockException e) {
            throw new OptimisticLockException("Sản phẩm đã được cập nhật bởi một người dùng khác, hãy thử lại");
        }

    }

    @Override
    @Transactional
    public void softDelete(Long id) throws DataNotFoundException {
        if (!productRepository.existsById(id)) throw new DataNotFoundException("Product Not Found");
        productRepository.softDelete(id);
    }

    @Override
    public Integer getStockQuantity(Long id) {
        return productRepository.getStockQuantity(id);
    }

    @Override
    public List<ProductResponse> findAllProductResponseByIds(Set<Long> ids) {
        return productMapper.toProductResponses(productRepository.findAllById(ids));
    }

    @Override
    public List<Product> findAllByIds(Set<Long> ids) {
        return productRepository.findAllById(ids);
    }

    @Override
    public Boolean existedByIdNotDeleted(Long id) {
        return productRepository.existsById(id);
    }

    @Override
    public void changeStatus(Long id) throws DataNotFoundException {
        Product existedProduct = findById(id);
        existedProduct.setIsPublished(!existedProduct.getIsPublished());
        try {
            productRepository.save(existedProduct);
        } catch (OptimisticLockException e) {
            throw new OptimisticLockException("The product was updated by another transaction. Please try again.");
        }
    }
}
