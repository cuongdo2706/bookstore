package org.example.backend.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/hello")
    public String hello(){
        return "Hello World";
    }
}
