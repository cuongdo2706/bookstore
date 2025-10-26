package org.example.backend.service;

import org.example.backend.dto.response.ImageResponse;
import org.example.backend.entity.Image;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {
    ImageResponse upload(MultipartFile file);
    Resource loadImageAsResource(String publicId);
    Image findImageByPublicId(String publicId);
    void deleteImage();
    void validateFile();
    String getFileExtension(String filename);
    String generatePublicId();
}
