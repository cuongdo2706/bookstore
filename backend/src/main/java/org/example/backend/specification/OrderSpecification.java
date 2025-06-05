package org.example.backend.specification;

import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Order;
import org.springframework.data.jpa.domain.Specification;

import java.util.Set;

public class OrderSpecification {
    public static Specification<Order> orderCodeOrPhoneNumContains(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";
            Predicate orderCode = criteriaBuilder.like(criteriaBuilder.lower(root.get("code")), searchPattern);
            Predicate phoneNum = criteriaBuilder.like(root.get("phoneNum"), searchPattern);
            return criteriaBuilder.or(orderCode, phoneNum);
        };
    }

    public static Specification<Order> hasOrderType(Boolean orderType) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("orderType"), orderType);
    }

    public static Specification<Order> hasOrderStatus(Set<Short> orderStatus) {
        return (root, query, criteriaBuilder) -> root.get("orderStatus").in(orderStatus);
    }

}
