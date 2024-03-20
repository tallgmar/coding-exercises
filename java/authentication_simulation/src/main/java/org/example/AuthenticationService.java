package org.example;

public class AuthenticationService {
    private static final String CORRECT_USERNAME = "admin";
    private static final String CORRECT_PASSWORD = "password123";

    public boolean authenticate(String username, String password) {
        return CORRECT_USERNAME.equals(username) && CORRECT_PASSWORD.equals(password);
    }
}