package org.example.backend.controller;

import org.example.backend.dto.request.OrderOfflineRequest;
import org.example.backend.dto.response.OrderOfflineResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.impl.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/offline")
    public SuccessResponse<OrderOfflineResponse> placeOrderOffline(@RequestBody OrderOfflineRequest request) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.CREATED.value(),
                "Place order success",
                orderService.placeOrderOffline(request)
        );
    }
}
