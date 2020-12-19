import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.*;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.concurrent.ExecutionException;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;

public class Uploader {

    private static TreeMap<String, TreeSet<String>> routes;
    private static Firestore db;
    private static final boolean DEBUG = true;

    public static void main (String[] args) throws Exception {
        upload();
    }

    public static void upload () throws IOException {
        getRoutes();
        initDB();
        assert db != null : "Database cannot be null.";

        debug("Adding all routes...");

        CollectionReference colRef = db.collection("airport");
        for (String route : routes.keySet()) {
            HashMap<String, Object> fields = new HashMap<>();
            fields.put("flights", new ArrayList<>(routes.get(route)));
            ApiFuture<WriteResult> result = colRef.document(route).set(fields);
            while (!result.isDone()) {
                // hi! if you're reading this, we apologize
                // this ensures we wait until the request is fulfilled.
                continue;
            }
            debug("\tAdded " + route);
        }

        debug("Added all valid routes.");
    }

    private static void initDB () throws IOException {
        InputStream serviceAccount = new FileInputStream("service_account_credentials.json");
        GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(credentials)
                .build();
        FirebaseApp.initializeApp(options);

        db = FirestoreClient.getFirestore();
    }

    private static void getRoutes () {
        routes = Preprocessor.preprocess();
    }

    private static void debug (String text) {
        if (DEBUG)
            System.out.println(text);
    }

}