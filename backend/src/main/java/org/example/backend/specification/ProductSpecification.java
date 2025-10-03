package org.example.backend.specification;

import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Product;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;


public class ProductSpecification {
    public static Specification<Product> isActive(Boolean isActive) {
        return (root, query, criteriaBuilder) ->
                isActive == Boolean.TRUE || isActive == null ?
                        criteriaBuilder.isTrue(root.get("isActive")) :
                        criteriaBuilder.isFalse(root.get("isActive"));
    }

    public static Specification<Product> isDeletedFalse() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isFalse(root.get("isDeleted"));
    }

    public static Specification<Product> nameOrCodeContains(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";
            Predicate name = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), searchPattern);
            Predicate code = criteriaBuilder.like(criteriaBuilder.lower(root.get("code")), searchPattern);
            return criteriaBuilder.or(name, code);
        };
    }

    public static Specification<Product> publisherIn(List<Long> publisherIds) {
        return (root, query, criteriaBuilder) -> root.get("publisher").in(publisherIds);
    }

    public static Specification<Product> authorIn(List<Long> authorIds){
        return (root, query, criteriaBuilder) -> root.get("authors").in(authorIds);
    }

    public static Specification<Product> categoryIn(List<Long> categoryIds){
        return (root, query, criteriaBuilder) -> root.get("categories").in(categoryIds);
    }

}
