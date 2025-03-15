package org.example.backend.controller;

import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Coupon;
import org.example.backend.service.ICouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("coupon")
public class CouponController {
    @Autowired
    private ICouponService couponService;

    @GetMapping("/{code}")
    public SuccessResponse<Coupon> findValidVoucherByCode(@PathVariable String code) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", couponService.findValidCouponByCode(code));
    }
}
