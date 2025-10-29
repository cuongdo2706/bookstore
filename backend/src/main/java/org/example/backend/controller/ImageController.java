package org.example.backend.controller;

import lombok.RequiredArgsConstructor;
import org.example.backend.entity.Image;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.ImageService;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("images")
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @GetMapping("/{publicId}")
    public ResponseEntity<Resource> serveImage(@PathVariable String publicId) {
        try {
            Resource resource = imageService.loadImageAsResource(publicId);
            Image image = imageService.findImageByPublicId(publicId);
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(image.getContentType() != null ? image.getContentType() : "application.octet-stream"))
                    .contentLength(image.getFileSize())
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "inline; filename=\"" + image.getOriginalName() + "\"")
                    .header(HttpHeaders.CACHE_CONTROL, "max-age=31536000, public")
                    .body(resource);
        } catch (DataNotFoundException e) {
            return ResponseEntity.notFound().build();

        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();

        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }
}
