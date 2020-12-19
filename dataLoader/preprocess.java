import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;
import java.util.TreeMap;
import java.util.TreeSet;


public class preprocess {



    public static void main(String[] args) {
        TreeMap<String, TreeSet<String>> routes = new TreeMap<>();
        parseData(routes);
    }

    private static void parseData(TreeMap<String, TreeSet<String>> routes) {
        File file = new File("routes.txt");
        try (Scanner sc = new Scanner(file, StandardCharsets.UTF_8.name())) {
            while (sc.hasNextLine()){
                String next = sc.nextLine();
                String[] route = next.split(",");
                String start = route[2];
                String dest = route[4];
                if(!routes.containsKey(start)) {
                    routes.put(start, new TreeSet<>());
                }
                routes.get(start).add(dest);
            }
        }
        catch (IOException e) {
            e.printStackTrace();
        }
    }
//
//    private static void printRoutes() {
//        for(String route : routes.keySet()) {
//            System.out.println(route + ": " + routes.get(route));
//        }
//    }
}
