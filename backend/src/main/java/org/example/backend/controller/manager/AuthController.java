package org.example.backend.controller.manager;

import lombok.RequiredArgsConstructor;
import org.example.backend.dto.request.LoginRequest;
import org.example.backend.dto.response.AuthResponse;
import org.example.backend.dto.response.SuccessResponse;
import org.example.backend.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping
    public SuccessResponse<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest);
        AuthResponse authResponse = new AuthResponse(token);
        return new SuccessResponse<>(HttpStatus.OK.value(), "Login success", authResponse);
    }
}
