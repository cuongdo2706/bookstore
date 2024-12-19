package org.example.backend.spec;

import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Product;
import org.springframework.data.jpa.domain.Specification;


public class BookSpec {
    public static Specification<Product> isActiveTrue() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isTrue(root.get("isActive"));
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

    public static Specification<Product> findByNameOrCode(String keyword) {
        return Specification.where(nameOrCodeContains(keyword))
                .and(isActiveTrue())
                .and(isDeletedFalse());
    }

}
