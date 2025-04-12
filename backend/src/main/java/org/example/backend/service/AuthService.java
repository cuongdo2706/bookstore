package org.example.backend.service;

import org.example.backend.dto.request.LoginRequest;

public interface AuthService {
    String login(LoginRequest loginRequest);
}
