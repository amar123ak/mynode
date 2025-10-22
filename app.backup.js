const http = require('http');

const hostname = '127.0.0.1';      // Use 127.0.0.1 for local testing
const port = 4000;                 // App will run on http://localhost:4000
const author = 'Amarendra Reddy';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.end(`
      <html>
        <head>
          <title>Welcome</title>
          <style>
            body {
              font-family: Arial;
              background-color: #f4f4f4;
              text-align: center;
              padding-top: 50px;
            }
            h1 { color: #007acc; }
            p { color: #444; }
            a { color: #007acc; text-decoration: none; }
            a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <h1>🚀 Hello from Amarendra’s Custom Node Server!</h1>
          <p>This is my personalized Node.js server running on port ${port}.</p>
          <p>Check out <a href="/about">About</a> or <a href="/contact">Contact</a>.</p>
        </body>
      </html>
    `);
  } else if (req.url === '/about') {
    res.end(`<h1>About Page</h1><p>Created by ${author} using pure Node.js!</p>`);
  } else if (req.url === '/contact') {
    res.end(`<h1>Contact</h1><p>Email: amarendra@example.com</p>`);
  } else {
    res.statusCode = 404;
    res.end(`<h1>404 - Page Not Found</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});
