import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

public class Server {
    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", new HttpHandler() {
            @Override
            public void handle(HttpExchange t) {
                try {
                    byte[] response = Files.readAllBytes(Path.of("index.html"));
                    t.sendResponseHeaders(200, response.length);
                    OutputStream os = t.getResponseBody();
                    os.write(response);
                    os.close();
                } catch(Exception e) {
                    try {
                        String msg = "404 Not Found";
                        t.sendResponseHeaders(404, msg.length());
                        OutputStream os = t.getResponseBody();
                        os.write(msg.getBytes());
                        os.close();
                    } catch(Exception ex) {}
                }
            }
        });
        server.setExecutor(null);
        System.out.println("Serving on http://localhost:8000/");
        server.start();
    }
}
