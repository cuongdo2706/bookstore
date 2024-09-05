package org.example.backend.spec;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.NoArgsConstructor;
import org.example.backend.entity.Book;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;


public class BookSpec {
    public static Specification<Book> isActiveTrue() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isTrue(root.get("isActive"));
    }

    public static Specification<Book> isDeletedFalse() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isFalse(root.get("isDeleted"));
    }

    public static Specification<Book> nameOrCodeContains(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";
            Predicate name = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), searchPattern);
            Predicate code = criteriaBuilder.like(criteriaBuilder.lower(root.get("code")), searchPattern);
            return criteriaBuilder.or(name, code);
        };
    }

    public static Specification<Book> findByNameOrCode(String keyword) {
        return Specification.where(nameOrCodeContains(keyword))
                .and(isActiveTrue())
                .and(isDeletedFalse());
    }

}
