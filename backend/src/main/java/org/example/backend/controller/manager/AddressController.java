package org.example.backend.controller.manager;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.entity.Commune;
import org.example.backend.entity.Province;
import org.example.backend.service.CommuneService;
import org.example.backend.service.ProvinceService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("address")
@RequiredArgsConstructor
public class AddressController {
    private final ProvinceService provinceService;
    private final CommuneService communeService;

    @GetMapping("/province")
    public SuccessResponse<List<Province>> findAllProvinces() {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", provinceService.findAll());
    }

    @GetMapping("/province/{code}/commune")
    public SuccessResponse<List<Commune>> findByProvinceCode(@PathVariable("code") Short code) {
        return new SuccessResponse<>(HttpStatus.OK.value(), "Getting data success", communeService.findByProvinceCode(code));
    }
}
