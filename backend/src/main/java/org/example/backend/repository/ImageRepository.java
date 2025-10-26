package org.example.backend.repository;

import org.example.backend.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImageRepository extends JpaRepository<Image,Long> {
    Optional<Image>findByPublicId(String publicId);
    boolean existsByPublicId(String publicId);
}
