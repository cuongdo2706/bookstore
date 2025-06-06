package org.example.backend.specification;

import jakarta.persistence.criteria.Predicate;
import org.example.backend.entity.Order;
import org.springframework.data.jpa.domain.Specification;

import java.util.Set;

public class OrderSpecification {
    public static Specification<Order> orderCodeContains(String keyword) {
        return (root, query, criteriaBuilder) -> {
            String searchPattern = "%" + keyword.toLowerCase() + "%";
            return criteriaBuilder.like(criteriaBuilder.lower(root.get("code")), searchPattern);
        };
    }

    public static Specification<Order> hasOrderType(Set<Short> orderTypes) {
        return (root, query, criteriaBuilder) -> root.get("orderType").in(orderTypes);
    }

    public static Specification<Order> hasOrderStatus(Set<Short> orderStatus) {
        return (root, query, criteriaBuilder) -> root.get("orderStatus").in(orderStatus);
    }

}
