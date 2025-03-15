package org.example.backend.service;

import org.example.backend.entity.Coupon;
import org.example.backend.exception.DataNotFoundException;

import java.math.BigDecimal;

public interface ICouponService {
    Coupon findById(Long id) throws DataNotFoundException;

    Coupon findValidCouponByCode(String code);

    Coupon useCoupon(Long id, BigDecimal totalAmount) throws DataNotFoundException;

    void validateCoupon(Coupon coupon, BigDecimal totalAmount);

    BigDecimal calculateDiscount(Coupon coupon, BigDecimal totalAmount);
}
