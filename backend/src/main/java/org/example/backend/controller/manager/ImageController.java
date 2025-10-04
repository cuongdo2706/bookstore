package org.example.backend.controller.manager;

import org.example.backend.dto.response.ImageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.service.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("upload")
public class ImageController {
    private final ImageService imageService;

    public ImageController(ImageService imageService){
        this.imageService=imageService;
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public SuccessResponse<ImageResponse> uploadImage(@RequestPart("file") MultipartFile file) throws IOException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Upload image success", imageService.upload(file));
    }

    @PutMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public SuccessResponse<ImageResponse> updateImage(@RequestPart("file") MultipartFile file,
                                                      @RequestParam(name = "publicId") String publicId)
            throws IOException {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Update image success", imageService.update(publicId, file));
    }
}
