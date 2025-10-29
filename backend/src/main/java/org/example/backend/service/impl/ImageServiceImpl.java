package org.example.backend.service.impl;

import jakarta.persistence.OptimisticLockException;
import lombok.RequiredArgsConstructor;
import org.example.backend.configuration.FileUploadConfig;
import org.example.backend.entity.Image;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.mapper.ImageMapper;
import org.example.backend.repository.ImageRepository;
import org.example.backend.service.ImageService;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;
    private final FileUploadConfig fileUploadConfig;
    private final ImageMapper imageMapper;

    @Override
    @Transactional
    public Image upload(MultipartFile file, String path) throws IOException {
        validateFile(file);
        String publicId = generatePublicId();
        String fileExt = getFileExtension(file.getOriginalFilename());
//        String revPath = String.format(path + "/%s.%s", publicId, fileExt);
//        Path fullPath = Paths.get(fileUploadConfig.getBaseDir(),revPath);
        Path fullPath = buildFullPath(path, publicId, fileExt);
        try{
        Files.createDirectories(fullPath.getParent());
        Files.copy(file.getInputStream(), fullPath, StandardCopyOption.REPLACE_EXISTING);
        BufferedImage bufferedImage = ImageIO.read(fullPath.toFile());
        Integer width = bufferedImage != null ? bufferedImage.getWidth() : null;
        Integer height = bufferedImage != null ? bufferedImage.getHeight() : null;
        Image newImage = Image.builder().
                publicId(publicId).
                relativePath(path).
                fileExtension(fileExt).
                originalName(file.getOriginalFilename()).
                fileSize(file.getSize()).
                width(width).
                height(height).
                contentType(file.getContentType()).
                build();
        return imageRepository.save(newImage);
        }catch (Exception e){
            if (Files.exists(fullPath))
                Files.delete(fullPath);
            throw new IOException("Lưu ảnh thất bại: "+e.getMessage());
        }
    }

    @Override
    @Transactional
    public Image update(MultipartFile newFile, Image existedImage) throws IOException {
        validateFile(newFile);
        String newFileExt = getFileExtension(newFile.getOriginalFilename());
        Path oldFilePath = buildFullPath(existedImage.getRelativePath(), existedImage.getPublicId(), existedImage.getFileExtension());
        Path newFilePath = buildFullPath(existedImage.getRelativePath(), existedImage.getPublicId(), newFileExt);
        //backup
        Path backupPath = null;

        try {
            // Backup file cũ nếu tồn tại
            if (Files.exists(oldFilePath)) {
                backupPath = Paths.get(oldFilePath.toString() + ".backup");
                Files.copy(oldFilePath, backupPath, StandardCopyOption.REPLACE_EXISTING);
            }
            // Xóa file cũ nếu extension khác
            if (!existedImage.getFileExtension().equals(newFileExt) && Files.exists(oldFilePath))
                Files.delete(oldFilePath);
            // Ghi file mới
            Files.createDirectories(newFilePath.getParent());
            Files.copy(newFile.getInputStream(), newFilePath, StandardCopyOption.REPLACE_EXISTING);

            BufferedImage bufferedImage = ImageIO.read(newFilePath.toFile());
            Integer width = bufferedImage != null ? bufferedImage.getWidth() : null;
            Integer height = bufferedImage != null ? bufferedImage.getHeight() : null;
            //Update entity
            existedImage.setFileExtension(newFileExt);
            existedImage.setOriginalName(newFile.getOriginalFilename());
            existedImage.setFileSize(newFile.getSize());
            existedImage.setWidth(width);
            existedImage.setHeight(height);
            existedImage.setContentType(newFile.getContentType());
            Image updatedImage = imageRepository.save(existedImage);
            if (backupPath != null && Files.exists(backupPath)) {
                Files.delete(backupPath);
            }
            return updatedImage;
        } catch (OptimisticLockException e) {
            restoreBackup(oldFilePath,backupPath);
            throw new OptimisticLockException("Image was modified by another user. Please retry.");

        } catch (Exception e) {
            restoreBackup(oldFilePath,backupPath);
            throw new IOException("Failed to update image: " + e.getMessage(), e);
        }

    }

    @Override
    public Path buildFullPath(String path, String publicId, String fileExt) {
        String revPath = String.format("%s/%s.%s",path, publicId, fileExt);
        return Paths.get(fileUploadConfig.getBaseDir())
                .toAbsolutePath()
                .resolve(revPath)
                .normalize();
    }

    @Override
    public Resource loadImageAsResource(String publicId) throws DataNotFoundException, IOException {
        Image existedImage = findImageByPublicId(publicId);
        Path fullPath = buildFullPath(existedImage.getRelativePath(), existedImage.getPublicId(), existedImage.getFileExtension());
        Path baseDir = Paths.get(fileUploadConfig.getBaseDir()).toAbsolutePath();
        if (!Files.exists(fullPath)||!Files.isRegularFile(fullPath)) {
            throw new DataNotFoundException("Không tìm thấy file trên ổ đĩa: " + fullPath);
        }
        if (!fullPath.startsWith(baseDir)) {
            throw new SecurityException("Đường dẫn không hợp lệ");
        }
        Path realFile = fullPath.toRealPath();

        if (!realFile.startsWith(baseDir)) {
            throw new SecurityException("Access denied");
        }
        return new UrlResource(realFile.toUri());
    }

    @Override
    public Image findImageByPublicId(String publicId) throws DataNotFoundException {
        return imageRepository.findByPublicId(publicId).orElseThrow(() -> new DataNotFoundException("Không tìm thấy ảnh có public ID: " + publicId));
    }

    @Override
    public void deleteImage() {

    }

    @Override
    public void validateFile(MultipartFile file) {

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

    @Override
    public void restoreBackup(Path originalPath, Path backupPath) throws IOException {
        if (backupPath!=null&&Files.exists(backupPath)){
            Files.copy(backupPath,originalPath,StandardCopyOption.REPLACE_EXISTING);
            Files.delete(backupPath);
        }
    }
}
