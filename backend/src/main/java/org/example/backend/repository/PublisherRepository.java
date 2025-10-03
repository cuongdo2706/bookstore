package org.example.backend.repository;

import org.example.backend.entity.Publisher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublisherRepository extends JpaRepository<Publisher,Long> {
    boolean existsByName(String name);
}
