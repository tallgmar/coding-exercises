package org.example;

import java.util.Scanner;

public class AuthenticationApp {
    public static void main(String[] args) {
        AuthenticationService authService = new AuthenticationService();

        try (Scanner scanner = new Scanner(System.in)) {

            System.out.print("Enter username: ");
            String username = scanner.nextLine().trim(); // Trim to remove leading and trailing spaces
            if (username.isEmpty()) {
                throw new IllegalArgumentException("Username cannot be empty.");
            }

            System.out.print("Enter password: ");
            String password = scanner.nextLine().trim(); // Trim to remove leading and trailing spaces
            if (password.isEmpty()) {
                throw new IllegalArgumentException("Password cannot be empty.");
            }

            boolean isAuthenticated = authService.authenticate(username, password);

            if (isAuthenticated) {
                System.out.println("Authentication successful!");
            } else {
                System.out.println("Invalid username or password. Authentication failed.");
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}