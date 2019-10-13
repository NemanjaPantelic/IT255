package it255;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

public class REST {

    public static void main(String[] args) {
        getExample();
        postExample();
    }

    public static void getExample() {
        try {

            URL url = new URL(" http://date.jsontest.com/");

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Pokusaj nije uspeo : HTTP error  : " + conn.getResponseCode());
            }

            BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
            String json = "";
            String output;
            while ((output = br.readLine()) != null) {
                json += output;

            }
            conn.disconnect();
            Gson gson = new Gson();

            TimeModel model = gson.fromJson(json, new TypeToken<TimeModel>() {
            }.getType());

            System.out.println(model);

        } catch (MalformedURLException e) {
        } catch (IOException e) {
        }
    }

    public static void postExample() {
        FitnesStats u = new FitnesStats();
        u.setDistance((float)1450.79);
        u.setStairs((long)56);
        u.setSteps((long)7690);
        try {
            URL url = new URL("https://fit-diary.free.beeceptor.com");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Accept", "application/json");
            conn.setDoOutput(true);
            
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Greška : HTTP error: " + conn.getResponseCode());
            }
            PrintWriter pw = new PrintWriter(conn.getOutputStream());
            pw.print(new Gson().toJson(u));
            pw.close();
            pw.flush();

            BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
            String output;
            while ((output = br.readLine()) != null) {
                System.out.println(output);
            }
            conn.disconnect();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
        }
    }
    }
