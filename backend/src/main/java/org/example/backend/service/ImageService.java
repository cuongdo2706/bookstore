package org.example.backend.service;

import org.example.backend.dto.response.ImageResponse;
import org.example.backend.entity.Image;
import org.example.backend.exception.DataNotFoundException;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;

public interface ImageService {
    Image upload(MultipartFile file,String path) throws IOException;
    Image update(MultipartFile newFile,Image image)throws IOException;
    Path buildFullPath(String path, String publicId, String fileExt);
    Resource loadImageAsResource(String publicId) throws DataNotFoundException, IOException;
    Image findImageByPublicId(String publicId) throws DataNotFoundException;
    void deleteImage();
    void validateFile(MultipartFile file);
    String getFileExtension(String filename);
    String generatePublicId();
    void restoreBackup(Path originalPath,Path backupPath) throws IOException;
}
