package org.example.backend.repository.custom.impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.example.backend.dto.request.ProductFilter;
import org.example.backend.repository.custom.ProductRepositoryCustom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Repository
public class ProductRepositoryCustomImpl implements ProductRepositoryCustom {
    @PersistenceContext
    private EntityManager em;

    @Override
    public Page<Object[]> searchProduct(ProductFilter filter) {
        Map<String, Object> mainQueryParameters = new HashMap<>();
        Map<String, Object> countQueryParameters = new HashMap<>();
        StringBuilder mainQueryStr = new StringBuilder("SELECT product.id, product.code, product.name, product.img_url, product.quantity, product.price, product.publisher, product.translator, product.num_of_pages,product.published_year, product.is_active, product.description,");
        mainQueryStr.append("author.id, author.name,");
        mainQueryStr.append("category.id, category.name,");
        mainQueryStr.append("promotion.id, promotion.code,promotion.name, promotion.description, promotion.start_date, promotion.end_date, promotion.promotion_type, promotion.promotion_value, promotion.is_active ");
        mainQueryStr.append("FROM tbl_product product ");
        mainQueryStr.append("LEFT JOIN tbl_author author ON product.author_id = author.id ");
        mainQueryStr.append("LEFT JOIN tbl_category category ON product.category_id = category.id ");
        mainQueryStr.append("LEFT JOIN tbl_promotion promotion ON product.promotion_id = promotion.id ");
        mainQueryStr.append("WHERE product.is_deleted = FALSE ");

        StringBuilder countQueryStr = new StringBuilder("SELECT COUNT(product) FROM tbl_product product ");
        countQueryStr.append(" WHERE product.is_deleted = FALSE ");
        //Check nameOrCodeKeyword có null không
        if (!Objects.equals(filter.getNameOrCodeKeyword(), null) && !filter.getNameOrCodeKeyword().isBlank()) {
            StringBuilder keywordStr = new StringBuilder("AND ((UNACCENT(product.name) ILIKE UNACCENT(CONCAT('%', :nameOrCodeKeyword, '%'))) OR (product.code ILIKE CONCAT('%', :nameOrCodeKeyword, '%'))) ");
            mainQueryStr.append(keywordStr);
            countQueryStr.append(keywordStr);
            mainQueryParameters.put("nameOrCodeKeyword", filter.getNameOrCodeKeyword());
            countQueryParameters.put("nameOrCodeKeyword", filter.getNameOrCodeKeyword());
        }
        mainQueryStr.append(switch (filter.getSortBy()) {
            case "name" -> "ORDER BY product.name ";
            case "name-desc" -> "ORDER BY product.name DESC ";
            case "price" -> "ORDER BY product.price ";
            case "price-desc" -> "ORDER BY product.price DESC ";
            default -> throw new RuntimeException("Sort pattern not valid: " + filter.getSortBy());
        });
        Integer limit = filter.getSize();
        Integer offset = (filter.getPage() - 1) * filter.getSize();

        mainQueryStr.append("LIMIT :limit OFFSET :offset");
        mainQueryParameters.put("limit", limit);
        mainQueryParameters.put("offset", offset);

        Query mainQuery = em.createNativeQuery(mainQueryStr.toString());
        Query countQuery = em.createNativeQuery(countQueryStr.toString());
        for (Map.Entry<String, Object> entry : mainQueryParameters.entrySet()) {
            mainQuery.setParameter(entry.getKey(), entry.getValue());
        }
        for (Map.Entry<String, Object> entry : countQueryParameters.entrySet()) {
            countQuery.setParameter(entry.getKey(), entry.getValue());
        }
        Pageable pageable = PageRequest.of(filter.getPage(), filter.getSize());
        List mainQueryResults = mainQuery.getResultList();
        
        Long countQueryResult = (Long) countQuery.getSingleResult();

        return new PageImpl<>(mainQueryResults, pageable, countQueryResult);
    }
}
