package org.example.backend.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record SuccessResponse<T>(int code, String message, T data) {
}
