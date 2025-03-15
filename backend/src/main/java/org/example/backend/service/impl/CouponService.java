package org.example.backend.service.impl;

import org.example.backend.constant.PromotionConstant;
import org.example.backend.entity.Coupon;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.exception.VoucherException;
import org.example.backend.repository.CouponRepository;
import org.example.backend.service.ICouponService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;

@Service
public class CouponService implements ICouponService {
    @Autowired
    private CouponRepository repo;

    @Override
    public Coupon findById(Long id) throws DataNotFoundException {
        return repo.findById(id).orElseThrow(() -> new DataNotFoundException("Voucher Not Found"));
    }

    @Override
    public Coupon findValidCouponByCode(String code) {
        return repo.findValidCouponByCode(code);
    }

    @Override
    public Coupon useCoupon(Long id, BigDecimal totalAmount) throws DataNotFoundException {
        Coupon coupon = findById(id);
        validateCoupon(coupon, totalAmount);
        coupon.setUsedCount(coupon.getUsedCount() + 1);
        return repo.save(coupon);
    }

    @Override
    public void validateCoupon(Coupon coupon, BigDecimal totalAmount) {
        LocalDate now = LocalDate.now();
        if (coupon.getStartDate() != null && now.isBefore(coupon.getStartDate())) {
            throw new VoucherException("Coupon chưa đến thời gian sử dụng");
        }
        if (coupon.getEndDate() != null && now.isAfter(coupon.getEndDate())) {
            throw new VoucherException("Coupon đã hết hạn");
        }
        if (coupon.getQuantity() != null && coupon.getUsedCount() >= coupon.getQuantity()) {
            throw new VoucherException("Coupon đã hết lượt sử dụng");
        }
        if (coupon.getMinAmount() != null && totalAmount.compareTo(coupon.getMinAmount()) < 0) {
            throw new VoucherException("Đơn hàng chưa đạt giá trị tối thiểu để sử dụng coupon");
        }
    }

    @Override
    public BigDecimal calculateDiscount(Coupon coupon, BigDecimal totalAmount) {
        if (coupon == null) {
            return BigDecimal.ZERO;
        }
        BigDecimal discount = BigDecimal.ZERO;
        if (coupon.getPromotionType().equals(PromotionConstant.PromotionType.FIXED)) {
            discount = coupon.getPromotionValue();
            if (discount.compareTo(totalAmount) > 0) {
                discount = totalAmount;
            }
        }
        if (coupon.getPromotionType().equals(PromotionConstant.PromotionType.PERCENT)) {
            discount = totalAmount.multiply(coupon.getPromotionValue()).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            if (coupon.getMaxDiscount() != null && discount.compareTo(coupon.getMaxDiscount()) > 0) {
                discount = coupon.getMaxDiscount();
            }
        }
        return discount.setScale(2, RoundingMode.HALF_UP);
    }
}
