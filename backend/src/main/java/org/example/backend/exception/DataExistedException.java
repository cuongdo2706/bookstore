package org.example.backend.exception;

public class DataExistedException extends RuntimeException {
    public DataExistedException(String message) {
        super(message);
    }
}
