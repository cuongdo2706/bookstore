package org.example.backend.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.example.backend.dto.response.ImageResponse;
import org.example.backend.service.ImageService2;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Component
public class ImageService2Impl implements ImageService2 {
    private final Cloudinary cloudinary;

    public ImageService2Impl(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    public ImageResponse upload(MultipartFile multipartFile) throws IOException {
        if (multipartFile.isEmpty()) return null;
        Map result = cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.emptyMap());
        String url = (String) result.get("url");
        String publicId = (String) result.get("public_id");
        return null;
    }

    public ImageResponse update(String publicIdExisted, MultipartFile multipartFile) throws IOException {
        if (multipartFile.isEmpty()) return null;
        Map result = cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.asMap(
                "public_id", publicIdExisted,
                "overwrite", true
        ));
        String url = (String) result.get("url");
        String publicId = (String) result.get("public_id");
        return null;
    }


    public void delete(String publicId) throws IOException {
        cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }
}
