package org.example.backend.service;

import org.example.backend.entity.Voucher;
import org.example.backend.exception.DataNotFoundException;

import java.math.BigDecimal;

public interface IVoucherService {
    Voucher findById(Long id) throws DataNotFoundException;
    Voucher findValidVoucherByCode(String code);
    Voucher useVoucher(Long id,BigDecimal totalAmount) throws DataNotFoundException;
    void validateVoucher(Voucher voucher,BigDecimal totalAmount);
    BigDecimal calculateDiscount(Voucher voucher,BigDecimal totalAmount);
}
