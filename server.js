import { clear } from "console";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Hello Node!!!!</h1>\n");
  } else if (req.url === "/about") {
    res.end("<h1>Welcome to about!!!!</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>CONTACT INFO<h1/>");
  }
});

server.listen(3000, () => console.log("server connected"));
