package org.example.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.response.ImageResponse;
import org.example.backend.entity.Image;
import org.example.backend.service.ImageService;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    @Override
    public ImageResponse upload(MultipartFile file) {
        return null;
    }

    @Override
    public Resource loadImageAsResource(String publicId) {
        return null;
    }

    @Override
    public Image findImageByPublicId(String publicId) {
        return null;
    }

    @Override
    public void deleteImage() {

    }

    @Override
    public void validateFile() {

    }

    @Override
    public String getFileExtension(String filename) {
        if (filename == null || !filename.contains(".")) {
            return "";
        }
        return filename.substring(filename.lastIndexOf(".") + 1);
    }

    @Override
    public String generatePublicId() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
