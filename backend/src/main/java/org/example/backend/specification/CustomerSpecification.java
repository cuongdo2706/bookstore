package org.example.backend.specification;

import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Customer;
import org.springframework.data.jpa.domain.Specification;

public class CustomerSpecification {
    public static Specification<Customer> isActive(Boolean isActive) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("isActive"), isActive);
    }

    public static Specification<Customer> nameOrCodeOrPhoneNumContains(String keyword) {
        return (root, query, cb) -> {
            Expression<String> searchPtnLowUnac = cb.function("aici", String.class, cb.literal("%" + keyword + "%"));
            Predicate name = cb.like(
                    cb.function("aici", String.class, root.get("name")),
                    searchPtnLowUnac);
            Predicate phoneNum = cb.like(cb.lower(root.get("phoneNum")), searchPtnLowUnac);
            Predicate code = cb.like(cb.lower(root.get("code")), searchPtnLowUnac);
            return cb.or(name, code, phoneNum);
        };
    }
}
