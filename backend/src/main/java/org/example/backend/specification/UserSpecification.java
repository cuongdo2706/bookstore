package org.example.backend.specification;

import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Customer;
import org.springframework.data.jpa.domain.Specification;

public class UserSpecification {
    public static Specification<Customer> isActiveTrue() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isTrue(root.get("isActive"));
    }

    public static Specification<Customer> isDeletedFalse() {
        return (root, query, criteriaBuilder) -> criteriaBuilder.isFalse(root.get("isDeleted"));
    }

    public static Specification<Customer> nameOrPhoneNumContains(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";
            Predicate name = criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), searchPattern);
            Predicate code = criteriaBuilder.like(criteriaBuilder.lower(root.get("phoneNum")), searchPattern);
            return criteriaBuilder.or(name, code);
        };
    }

    public static Specification<Customer> findByNameOrPhoneNum(String keyword) {
        return Specification.where(nameOrPhoneNumContains(keyword))
                .and(isActiveTrue())
                .and(isDeletedFalse());
    }
}
