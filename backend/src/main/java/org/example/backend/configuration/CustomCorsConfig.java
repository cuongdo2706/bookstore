package org.example.backend.configuration;

import jakarta.servlet.http.HttpServletRequest;
import lombok.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Component
public class CustomCorsConfig implements CorsConfigurationSource {
    @Override
    public CorsConfiguration getCorsConfiguration(@NonNull HttpServletRequest request) {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:4200","http://localhost:4300"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        config.setAllowedHeaders(List.of("*"));
        return config;
    }
}
