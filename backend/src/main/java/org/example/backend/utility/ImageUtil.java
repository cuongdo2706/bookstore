package org.example.backend.utility;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.example.backend.dto.response.ImageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Component
public class ImageUtil {
    @Autowired
    private Cloudinary cloudinary;


    public ImageResponse upload(MultipartFile multipartFile) throws IOException {
        Map result = cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.emptyMap());
        String url = (String) result.get("url");
        String publicId = (String) result.get("public_id");
        return new ImageResponse(publicId, url);
    }

    public ImageResponse update(String publicIdExisted, MultipartFile multipartFile) throws IOException {
        Map result = cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.asMap(
                "public_id", publicIdExisted,
                "overwrite", true
        ));
        String url = (String) result.get("url");
        String publicId = (String) result.get("public_id");
        return new ImageResponse(publicId, url);
    }


    public void delete(String publicId) throws IOException {
        cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }
}
