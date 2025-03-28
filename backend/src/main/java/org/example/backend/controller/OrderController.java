package org.example.backend.controller;

import org.example.backend.service.impl.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("order")
public class OrderController {
    @Autowired
    private OrderService orderService;

//    @PostMapping("/place-order")
//    public SuccessResponse<OrderOfflineResponse> placeOrderOffline(@RequestBody OrderOfflineRequest request) throws DataNotFoundException {
//        return new SuccessResponse<>(HttpStatus.CREATED.value(),
//                "Place order success",
//                orderService.placeOrderOffline(request)
//        );
//    }
}
