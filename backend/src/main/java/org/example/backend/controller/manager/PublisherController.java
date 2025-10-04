package org.example.backend.controller.manager;

import org.example.backend.dto.request.CreateAttributeRequest;
import org.example.backend.dto.response.PublisherResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.service.PublisherService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("publisher")
public class PublisherController {
    private final PublisherService publisherService;

    public PublisherController(PublisherService publisherService) {
        this.publisherService = publisherService;
    }

    @GetMapping
    public SuccessResponse<List<PublisherResponse>> findAll() {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Get publishers success", publisherService.findAll());
    }

    @PostMapping
    public SuccessResponse<PublisherResponse> create(@RequestBody CreateAttributeRequest request) {
        return new SuccessResponse<>(HttpStatus.CREATED.value(), "Create publisher success", publisherService.save(request));
    }

}
