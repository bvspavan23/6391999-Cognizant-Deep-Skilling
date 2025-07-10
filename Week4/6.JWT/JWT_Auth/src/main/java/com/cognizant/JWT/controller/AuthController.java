package com.cognizant.JWT.controller;


import com.cognizant.JWT.service.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.GET)
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String header = request.getHeader("Authorization");

        if (header == null || !header.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        String base64Credentials = header.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String decodedString = new String(decodedBytes);
        String[] credentials = decodedString.split(":", 2);

        if (credentials.length != 2) {
            return ResponseEntity.status(400).body("Invalid credentials format");
        }

        String username = credentials[0];
        String password = credentials[1];
        
        if (!"user".equals(username) || !"pwd".equals(password)) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
        String token = jwtUtil.generateToken(username);
        return ResponseEntity.ok().body(new TokenResponse(token));
    }

    static class TokenResponse {
        private String token;

        public TokenResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }
    }
}
