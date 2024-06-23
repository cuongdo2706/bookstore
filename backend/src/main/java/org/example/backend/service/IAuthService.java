package org.example.backend.service;

import org.example.backend.dto.request.LoginRequest;

public interface IAuthService {
    String login(LoginRequest loginRequest);
}
