package org.example.backend.controller.rest;

import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/order-detail")
public class OrderDetailController {
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/{id}")
    public SuccessResponse<List<OrderDetailResponse>> get(@PathVariable Long id) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success!", orderDetailService.findByOrderId(id));
    }
}
