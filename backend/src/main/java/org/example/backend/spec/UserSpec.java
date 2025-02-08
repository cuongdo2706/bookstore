package org.example.backend.spec;

import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Product;
import org.example.backend.entity.User;
import org.springframework.data.jpa.domain.Specification;

public class UserSpec {
    public static Specification<User> isActiveTrue() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isTrue(root.get("isActive"));
    }

    public static Specification<User> isDeletedFalse() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isFalse(root.get("isDeleted"));
    }

    public static Specification<User> nameOrPhoneNumContains(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";
            Predicate name = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), searchPattern);
            Predicate code = criteriaBuilder.like(criteriaBuilder.lower(root.get("phoneNum")), searchPattern);
            return criteriaBuilder.or(name, code);
        };
    }

    public static Specification<User> findByNameOrPhoneNum(String keyword) {
        return Specification.where(nameOrPhoneNumContains(keyword))
                .and(isActiveTrue())
                .and(isDeletedFalse());
    }
}
