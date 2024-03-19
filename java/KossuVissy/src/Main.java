public class Main {
    public static void main(String[] args) {
       for (int i = 1; i <= 100; i++) {
           String output = "";
           if (i % 3 == 0) {
                output += "kossu";
           }
           if (i % 5 == 0) {
               output += "vissy";
           }
           System.out.println(output.isEmpty() ? i : output);
       }
    }
}