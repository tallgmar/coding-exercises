public class Car implements Vehicle {
    private String model;
    private String make;
    private int year;
    private String color;
    private double speed;
    private double MAX_SPEED;

    // Constructor
    public Car(String model, String make, int year, String color, double speed, double MAX_SPEED) {
        this.model = model;
        this.make = make;
        this.year = year;
        this.color = color;
        this.speed = speed;
        this.MAX_SPEED = MAX_SPEED;
    }

    // Other methods (e.g., start, accelerate, brake, stop) can be added here

    @Override
    public void start() {
        if (speed == 0.0) {
            System.out.println("The " + color + " " + make + " " + model + " has been started.");
        } else {
            System.out.println("The " + color + " " + make + " " + model + " is already running.");
        }
    }

    @Override
    public void drive() {
        System.out.println("Car is driving...");
    }

    @Override
    public void stop() {
        System.out.println("Stopping the car...");
    }

    @Override
    public void accelerate(double speedIncrease) {
        if (speed < MAX_SPEED) { // MAX_SPEED is a constant defining the maximum speed
            speed += speedIncrease; // Increase speed by given unit
            System.out.println("The " + color + " " + make + " " + model + " is accelerating. New speed: " + speed);
        } else {
            System.out.println("The " + color + " " + make + " " + model + " is already at maximum speed.");
        }
    }

    @Override
    public void decelerate(double speedDecrease) {
        speed -= speedDecrease;
        if (speed < 0) {
            speed = 0;
        }
        System.out.println("Decelerating. Current speed: " + speed);
    }

    // Getters and setters for the attributes (omitted for brevity)

    public String getModel() {
        return model;
    }

    public String getMake() {
        return make;
    }

    public int getYear() {
        return year;
    }

    public String getColor() {
        return color;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    // Example usage: Creating a Vehicle instance and using its methods
    public static void main(String[] args) {
        /*
        Car myCar = new Car("Corolla", "Toyota", 2022, "Red", 0.0, 200);

        System.out.println("My car is a " + myCar.getColor() + " " + myCar.getMake() + " " +
                myCar.getModel() + " manufactured in " + myCar.getYear());
        */
    }
}
