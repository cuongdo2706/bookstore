package org.example.backend.service.impl;

import jakarta.persistence.OptimisticLockException;
import org.example.backend.dto.request.CreateProductRequest;
import org.example.backend.dto.request.FilterProductRequest;
import org.example.backend.dto.request.UpdateProductRequest;
import org.example.backend.dto.response.ImageResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.ProductResponse;
import org.example.backend.entity.Author;
import org.example.backend.entity.Category;
import org.example.backend.entity.Product;
import org.example.backend.entity.Publisher;
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
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final AuthorService authorService;
    private final PublisherService publisherService;
    private final SequenceService sequenceService;
    private final ImageServiceImpl imageServiceImpl;

    public ProductServiceImpl(ProductRepository productRepository,
                              CategoryService categoryService,
                              AuthorService authorService,
                              PublisherService publisherService,
                              SequenceService sequenceService,
                              ImageServiceImpl imageServiceImpl) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
        this.authorService = authorService;
        this.publisherService = publisherService;
        this.sequenceService = sequenceService;
        this.imageServiceImpl = imageServiceImpl;
    }


    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public List<ProductResponse> findAllProductResponse() {
        return ProductMapper.toProductResponses(findAll());
    }


    @Override
    public Product findById(Long id) throws DataNotFoundException {
        return productRepository.findById(id).orElseThrow(() -> new DataNotFoundException("Product Not Found"));
    }

    @Override
    public ProductResponse findProductResponseById(Long id) throws DataNotFoundException {
        return ProductMapper.toProductResponse(findById(id));
    }

    @Override
    public PageResponse<ProductResponse> searchProduct(FilterProductRequest filter) {
        Specification<Product> spec = Specification.<Product>unrestricted().and(ProductSpecification.isDeletedFalse()).and(ProductSpecification.isActive(filter.getIsActive()));
        if (!Objects.equals(filter.getNameOrCodeKeyword(), null) && !filter.getNameOrCodeKeyword().isBlank()) {
            spec = spec.and(ProductSpecification.nameOrCodeContains(filter.getNameOrCodeKeyword()));
        }
        if (filter.getAuthors() != null && !filter.getAuthors().isEmpty()) {
            spec = spec.and(ProductSpecification.authorIn(filter.getAuthors()));
        }
        if (filter.getCategories() != null && !filter.getCategories().isEmpty()) {
            spec = spec.and(ProductSpecification.categoryIn(filter.getCategories()));
        }
        if (filter.getPublishers() != null && !filter.getPublishers().isEmpty()) {
            spec = spec.and(ProductSpecification.publisherIn(filter.getPublishers()));
        }
        Sort sort = switch (filter.getSortBy()) {
            case "name" -> Sort.by(Sort.Direction.ASC, "name");
            case "name-d" -> Sort.by(Sort.Direction.DESC, "name");
            case "price" -> Sort.by(Sort.Direction.ASC, "price");
            case "price-d" -> Sort.by(Sort.Direction.DESC, "price");
            default -> throw new RuntimeException("Sort pattern not valid: " + filter.getSortBy());
        };
        Pageable pageable = PageRequest.of(filter.getPage() - 1, filter.getSize(), sort);
        Page<Product> products = productRepository.findAll(spec, pageable);
        return new PageResponse<>(ProductMapper.toProductResponses(products.getContent()), products.getNumber(), products.getSize(), products.getTotalElements(), products.getTotalPages());
    }

    @Transactional
    @Override
    public ProductResponse save(CreateProductRequest request, MultipartFile file) throws DataNotFoundException, IOException {
        ImageResponse imageResponse = null;
        if (file != null && !file.isEmpty()) {
            imageResponse = imageServiceImpl.upload(file);
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
        Product product = Product.builder().code(productCode).name(request.getName()).quantity(request.getQuantity()).publicId(imageResponse == null ? null : imageResponse.publicId()).imgUrl(imageResponse == null ? null : imageResponse.imgUrl()).price(request.getPrice()).publisher(existedPublisher).translator(request.getTranslator()).numOfPages(request.getNumOfPages()).publishedYear(request.getPublishedYear()).description(request.getDescription()).categories(existedCategories).isDeleted(Boolean.FALSE).isActive(Boolean.TRUE).authors(existedAuthors).build();
        return ProductMapper.toProductResponse(productRepository.save(product));

    }

    @Override
    public List<Product> saveAll(List<Product> products) {
        return productRepository.saveAll(products);
    }

    @Transactional
    @Override
    public ProductResponse update(Long id, UpdateProductRequest request, MultipartFile file) throws Exception {
        Product existedProduct = findById(id);
        if (request.getCode()!=null&&!Objects.equals(request.getCode(),existedProduct.getCode())){
            if (productRepository.existsByCode(request.getCode())){
                throw new DataExistedException("Mã này đã tồn tại, hãy dùng mã khác");
            }
            existedProduct.setCode(request.getCode());
        }
        if (request.getName() != null && !Objects.equals(request.getName(), existedProduct.getName()))
            existedProduct.setName(request.getName());
        if (request.getQuantity() != null && !Objects.equals(request.getQuantity(), existedProduct.getQuantity()))
            existedProduct.setQuantity(request.getQuantity());
        if (request.getPrice() != null && request.getPrice().compareTo(existedProduct.getPrice()) != 0)
            existedProduct.setPrice(request.getPrice());
        if (!Objects.equals(request.getPublisher(), existedProduct.getPublisher().getId())) {
            Publisher publisher = publisherService.findById(request.getPublisher());
            existedProduct.setPublisher(publisher);
        }
        if (!Objects.equals(request.getTranslator(), existedProduct.getTranslator()))
            existedProduct.setTranslator(request.getTranslator());
        if (!Objects.equals(request.getNumOfPages(), existedProduct.getNumOfPages()))
            existedProduct.setNumOfPages(request.getNumOfPages());
        if (!Objects.equals(request.getPublishedYear(), existedProduct.getPublishedYear()))
            existedProduct.setPublishedYear(request.getPublishedYear());
        if (!Objects.equals(request.getDescription(), existedProduct.getDescription()))
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
            ImageResponse imageResponse;
            if (existedProduct.getPublicId() != null) {
                imageResponse = imageServiceImpl.update(existedProduct.getPublicId(), file);
            } else {
                imageResponse = imageServiceImpl.upload(file);
            }
            existedProduct.setPublicId(imageResponse.publicId());
            existedProduct.setImgUrl(imageResponse.imgUrl());
        }
        try {
            return ProductMapper.toProductResponse(productRepository.save(existedProduct));
        } catch (OptimisticLockException e) {
            throw new Exception("The product was updated by another transaction. Please try again.");
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
        return ProductMapper.toProductResponses(productRepository.findAllById(ids));
    }

    @Override
    public List<Product> findAllByIds(Set<Long> ids) {
        return productRepository.findAllById(ids);
    }

    @Override
    public Boolean existedByIdNotDeleted(Long id) {
        return productRepository.existsById(id);
    }


}
