package org.example.backend.controller;

import lombok.AllArgsConstructor;
import org.example.backend.dto.request.LoginRequest;
import org.example.backend.dto.response.AuthResponse;
import org.example.backend.service.impl.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")

public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping(path = "/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest){

        //01 - Receive the token from AuthService
        String token = authService.login(loginRequest);

        //02 - Set the token as a response using JwtAuthResponse Dto class
        AuthResponse authResponseDto = new AuthResponse();
        authResponseDto.setToken(token);

        //03 - Return the response to the user
        return new ResponseEntity<>(authResponseDto, HttpStatus.OK);
    }
}
