const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.setHeader("Content-Type", "text/html");
  //   fs.readFile("Index.html", function (err, dataFromFile) {
  //       if(err){
  //           console.log('Error !');
  //       }else{
  //         res.end(dataFromFile);
  //       }
  //   });

  // JSON
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify([{ id: 1, title: "React", price: 5000 }]));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
