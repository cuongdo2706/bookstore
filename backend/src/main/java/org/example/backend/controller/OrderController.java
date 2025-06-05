package org.example.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.example.backend.dto.request.OrderCreatedRequest;
import org.example.backend.dto.request.OrderFilterRequest;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("order")
public class OrderController {
    @Autowired
    private OrderServiceImpl orderService;

    @PostMapping()
    public SuccessResponse<OrderResponse> create(@RequestBody OrderCreatedRequest request, HttpServletRequest http) throws DataNotFoundException {
        String header = http.getHeader("Authorization");
        String token = null;
        if (header != null && header.startsWith("Bearer ")) {
            token = header.substring(7);
        }
        return new SuccessResponse<>(HttpStatus.CREATED.value(),
                "Place order success",
                orderService.create(request, token)
        );
    }

    @GetMapping("/search")
    public SuccessResponse<PageResponse<OrderResponse>> searchOrder(@Valid @ModelAttribute OrderFilterRequest request) {
        return new SuccessResponse<>(HttpStatus.OK.value(),
                "Getting data success",
                orderService.searchOrder(request));
    }
}
