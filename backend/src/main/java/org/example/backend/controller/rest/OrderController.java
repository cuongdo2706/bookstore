package org.example.backend.controller.rest;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.example.backend.dto.request.OrderCreatedRequest;
import org.example.backend.dto.request.OrderFilterRequest;
import org.example.backend.dto.response.OrderDetailResponse;
import org.example.backend.dto.response.OrderResponse;
import org.example.backend.dto.response.PageResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Order;
import org.example.backend.entity.OrderDetail;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.OrderDetailService;
import org.example.backend.service.OrderService;
import org.example.backend.service.impl.OrderServiceImpl;
import org.example.backend.utility.ExcelUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private ExcelUtil excelUtil;
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping("/export-all-excel")
    public ResponseEntity<Resource> exportAllExcel() {
        List<Order> list = orderService.findAll();
        ByteArrayInputStream bais = excelUtil.exportOrderExcel(list);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=Danh-sach-hoa-don.xlsx");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")).body(new InputStreamResource(bais));
    }

    @GetMapping("/export-all-details-excel")
    public ResponseEntity<Resource> exportAllDetailsExcel() {
        List<OrderDetail> list = orderDetailService.findAll();
        ByteArrayInputStream bais = excelUtil.exportAllOrderDetailsExcel(list);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=Danh-sach-chi-tiet-hoa-don.xlsx");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")).body(new InputStreamResource(bais));
    }



    @GetMapping("/export-single-excel/{id}")
    public ResponseEntity<Resource> exportSingleExcel(@PathVariable Long id) throws DataNotFoundException {
        Order order = orderService.findById(id);
        ByteArrayInputStream bais = excelUtil.exportSingleOrderExcel(order);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=Chi-tiet-hoa-don.xlsx");
        return ResponseEntity.ok().headers(headers).contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")).body(new InputStreamResource(bais));
    }

    @PostMapping("/search")
    public SuccessResponse<PageResponse<OrderResponse>> searchOrder(@Valid @RequestBody OrderFilterRequest request) {
        return new SuccessResponse<>(HttpStatus.OK.value(),
                "Getting data success",
                orderService.searchOrder(request));
    }

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
}
