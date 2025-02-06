package org.example.backend.controller;

import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Voucher;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.service.IVoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("voucher")
public class VoucherController {
    @Autowired
    private IVoucherService voucherService;

    @GetMapping("/{code}")
    public SuccessResponse<Voucher>findVoucherByCode(@PathVariable String code) {
        return new SuccessResponse<>(HttpStatus.OK.value(),"Getting data success",voucherService.findByCode(code));
    }
}
