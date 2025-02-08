package org.example.backend.service;

import org.example.backend.entity.Voucher;

public interface IVoucherService {
    Voucher findValidVoucherByCode(String code);
}
