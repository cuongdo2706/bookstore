package org.example.backend.specification;

import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Customer;
import org.springframework.data.jpa.domain.Specification;

public class CustomerSpecification {
    public static Specification<Customer> isActive(Boolean isActive) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("isActive"), isActive);
    }

    public static Specification<Customer> nameOrCodeOrPhoneNumContains(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword + "%";
            Predicate name = criteriaBuilder.like(root.get("name"), searchPattern);
            Predicate phoneNum = criteriaBuilder.like(root.get("phoneNum"), searchPattern);
            Predicate code = criteriaBuilder.like(root.get("code"), searchPattern);
            return criteriaBuilder.or(name, code, phoneNum);
        };
    }
}
