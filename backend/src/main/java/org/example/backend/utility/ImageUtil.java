package org.example.backend.utility;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Component
public class ImageUtil {
    @Autowired
    private Cloudinary cloudinary;


    public Map<?,?> upload(MultipartFile multipartFile) throws IOException {
        return cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.emptyMap());
    }


    public void delete(String imgId) throws IOException {
        cloudinary.uploader().destroy(imgId, ObjectUtils.emptyMap());
    }
}
