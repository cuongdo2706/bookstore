package org.example.backend.service.impl;

import org.example.backend.constant.OrderConstant;
import org.example.backend.constant.PromotionConstant;
import org.example.backend.entity.Voucher;
import org.example.backend.exception.DataNotFoundException;
import org.example.backend.exception.VoucherException;
import org.example.backend.repository.VoucherRepository;
import org.example.backend.service.IVoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class VoucherService implements IVoucherService {
    @Autowired
    private VoucherRepository repo;

    @Override
    public Voucher findById(Long id) throws DataNotFoundException {
        return repo.findById(id).orElseThrow(() -> new DataNotFoundException("Voucher Not Found"));
    }

    @Override
    public Voucher findValidVoucherByCode(String code) {
        return repo.findValidVoucherByCode(code);
    }

    @Override
    public Voucher useVoucher(Long id, BigDecimal totalAmount) throws DataNotFoundException {
        Voucher voucher = findById(id);
        validateVoucher(voucher, totalAmount);
        voucher.setUsedCount(voucher.getUsedCount() + 1);
        return repo.save(voucher);
    }

    @Override
    public void validateVoucher(Voucher voucher, BigDecimal totalAmount) {
        LocalDate now = LocalDate.now();
        if (voucher.getStartDate() != null && now.isBefore(voucher.getStartDate())) {
            throw new VoucherException("Voucher chưa đến thời gian sử dụng");
        }
        if (voucher.getEndDate() != null && now.isAfter(voucher.getEndDate())) {
            throw new VoucherException("Voucher đã hết hạn");
        }
        if (voucher.getQuantity() != null && voucher.getUsedCount() >= voucher.getQuantity()) {
            throw new VoucherException("Voucher đã hết lượt sử dụng");
        }
        if (voucher.getMinAmount() != null && totalAmount.compareTo(voucher.getMinAmount()) < 0) {
            throw new VoucherException("Đơn hàng chưa đạt giá trị tối thiểu để sử dụng voucher");
        }
    }

    @Override
    public BigDecimal calculateDiscount(Voucher voucher, BigDecimal totalAmount) {
        if (voucher == null) {
            return BigDecimal.ZERO;
        }
        BigDecimal discount = BigDecimal.ZERO;
        if (voucher.getPromotionType().equals(PromotionConstant.PromotionType.FIXED)) {
            discount = voucher.getPromotionValue();
            if (discount.compareTo(totalAmount) > 0) {
                discount = totalAmount;
            }
        }
        if (voucher.getPromotionType().equals(PromotionConstant.PromotionType.PERCENT)) {
            discount = totalAmount.multiply(voucher.getPromotionValue()).divide(BigDecimal.valueOf(100), 2, RoundingMode.HALF_UP);
            if (voucher.getMaxDiscount() != null && discount.compareTo(voucher.getMaxDiscount()) > 0) {
                discount = voucher.getMaxDiscount();
            }
        }
        return discount.setScale(2, RoundingMode.HALF_UP);
    }
}
