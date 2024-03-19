//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        String model = "Model XYZ";
        String make = "Make ABC";
        int year = 2022;
        String color = "Red";
        double speed = 0.0;
        double MAX_SPEED = 200.0;

        Car car = new Car(model, make, year, color, speed, MAX_SPEED);
        car.start();
        car.accelerate(50); // Accelerate by 50 units
        car.decelerate(20); // Decelerate by 20 units
        car.drive();
        car.stop();

        System.out.println("My car is a " + car.getColor() + " " + car.getMake() + " " +
                car.getModel() + " manufactured in " + car.getYear());
    }
}