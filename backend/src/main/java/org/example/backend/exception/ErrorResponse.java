package org.example.backend.exception;

import java.time.LocalDateTime;

public record ErrorResponse(LocalDateTime timestamp, int status, String path, String error, String message) {

}
