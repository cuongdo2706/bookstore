package org.example.backend.controller;

import org.example.backend.dto.request.OfflineOrderRequest;
import org.example.backend.dto.response.OfflineOrderResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("order")
public class OrderController {
    @Autowired
    private OrderServiceImpl orderService;

    @PostMapping("/offline/place-order")
    public SuccessResponse<OfflineOrderResponse> placeOrderOffline(@RequestBody OfflineOrderRequest request) throws DataNotFoundException {
        return new SuccessResponse<>(HttpStatus.CREATED.value(),
                "Place order success",
                orderService.placeOrderOffline(request)
        );
    }
}
