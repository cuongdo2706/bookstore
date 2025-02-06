package org.example.backend.service;

import org.example.backend.entity.Voucher;

public interface IVoucherService {
    Voucher findByCode(String code);
}
