package org.example.backend.service;

import org.example.backend.dto.response.ImageResponse;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {
    ImageResponse upload(MultipartFile multipartFile) throws IOException;
    ImageResponse update(String publicIdExisted, MultipartFile multipartFile) throws IOException;
    void delete(String publicId) throws IOException;
}
