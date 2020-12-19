import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;


public class Preprocessor {

    public static TreeMap<String, TreeSet<String>> preprocess () {
        TreeMap<String, TreeSet<String>> routes = new TreeMap<>();
        parseData(routes);
        return routes;
    }

    private static void parseData (TreeMap<String, TreeSet<String>> routes) {
        File file = new File("dataLoader\\routes.txt");
        try (Scanner sc = new Scanner(file, StandardCharsets.UTF_8.name())) {
            while (sc.hasNextLine()) {
                String next = sc.nextLine();
                String[] route = next.split(",");
                String start = route[2];
                String dest = route[4];
                if (!routes.containsKey(start)) {
                    routes.put(start, new TreeSet<>());
                }
                routes.get(start).add(dest);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static HashMap<String, String> getAbbreviations() {
        File file = new File("dataLoader\\state_abbreviations.json");
        HashMap<String, String> abbreviations = new HashMap<>();
        try (Scanner sc = new Scanner(file, StandardCharsets.UTF_8.name())) {
            while (sc.hasNextLine()) {
                String next = sc.nextLine();
                String[] abbrevs = next.split(": ");
                abbreviations.put(abbrevs[0], abbrevs[1].substring(1,3));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return abbreviations;
    }

    public static HashMap<String, String> getAirportLocation() {
        File file = new File("dataLoader\\airports.json");
        HashMap<String, String> locations = new HashMap<>();
        try (Scanner sc = new Scanner(file, StandardCharsets.UTF_8.name())) {
            while (sc.hasNextLine()) {
                String next = sc.nextLine();
                String[] abbrevs = next.split(": ");
                if (abbrevs[0].equals("code"))
                locations.put(abbrevs[0], abbrevs[1].substring(1,3));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return locations;
    }
}
