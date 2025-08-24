package org.example.backend.controller.rest;

import lombok.AllArgsConstructor;
import org.example.backend.dto.request.LoginRequest;
import org.example.backend.dto.response.AuthResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.service.impl.AuthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthServiceImpl authService;

    @PostMapping
    public SuccessResponse<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest);
        AuthResponse authResponse = new AuthResponse(token);
        return new SuccessResponse<>(HttpStatus.OK.value(), "Login success", authResponse);
    }
}
