package org.example.backend.specification;


import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Product;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;


public class ProductSpecification {
    public static Specification<Product> isActive(Boolean isActive) {
        return (root, query, cb) -> cb.equal(root.get("isActive"), isActive);
    }

    public static Specification<Product> nameOrCodeContains(String keyword) {
        return (root, query, cb) -> {
            Expression<String> searchPtnLowUnac = cb.function("aici", String.class, cb.literal("%" + keyword + "%"));
            Predicate name = cb.like(
                    cb.function("aici",String.class,root.get("name")),
                    searchPtnLowUnac);
            Predicate code = cb.like(
                    cb.function("aici",String.class,root.get("code")),
                    searchPtnLowUnac);
            return cb.or(name, code);
        };
    }

    public static Specification<Product> publisherIn(List<Long> publisherIds) {
        return (root, query, criteriaBuilder) -> {
            assert query != null;
            query.distinct(true);
            return root.join("publisher", JoinType.INNER).get("id").in(publisherIds);
        };
    }

    public static Specification<Product> authorIn(List<Long> authorIds) {
        return (root, query, criteriaBuilder) -> {
            assert query != null;
            query.distinct(true);
            return root.join("authors", JoinType.INNER).get("id").in(authorIds);
        };
    }

    public static Specification<Product> categoryIn(List<Long> categoryIds) {
        return (root, query, criteriaBuilder) -> {
            assert query != null;
            query.distinct(true);
            return root.join("categories", JoinType.INNER).get("id").in(categoryIds);
        };
    }

}
