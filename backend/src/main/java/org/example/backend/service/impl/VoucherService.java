package org.example.backend.service.impl;

import org.example.backend.entity.Voucher;
import org.example.backend.repository.VoucherRepository;
import org.example.backend.service.IVoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoucherService implements IVoucherService {
    @Autowired
    private VoucherRepository repo;

    @Override
    public Voucher findValidVoucherByCode(String code) {
        return repo.findValidVoucherByCode(code);
    }
}
