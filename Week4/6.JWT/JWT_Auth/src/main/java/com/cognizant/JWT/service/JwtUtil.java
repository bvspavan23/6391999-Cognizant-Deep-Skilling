package com.cognizant.JWT.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtUtil {

    // Pad the key to meet the required 256-bit length (32 bytes)
    private final String SECRET_STRING = "cognizantcognizantcognizantcognizant";
    private final Key SECRET_KEY = Keys.hmacShaKeyFor(SECRET_STRING.getBytes());

    public String generateToken(String username) {
        long nowMillis = System.currentTimeMillis();
        long expMillis = nowMillis + 1000 * 60 * 10;

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(nowMillis))
                .setExpiration(new Date(expMillis))
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();
    }
}
