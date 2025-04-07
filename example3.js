const fs = require("fs");
const http = require("http");
const os = require("os");

const osType = os.type();
console.log(osType);

const htmlContent = `
<!DOCTYPE html>
<html>
  <h3>Hello, World! Your OS type is ${osType}</h3>
  </html>
`

const server = http.createServer((req, res) => {
  
  console.log("arxika dhmiourgoume arxeio index.html me periexomena htmlContent");
  fs.writeFile("./index.html", htmlContent, err => {
    if (err) {
      console.log("Problem in writing file", err);
    } else {
      console.log("diavazoume to arxeio kai to stelnoume pisw")
      fs.readFile("index.html", "utf-8", (err, content) => {
        if (err) {
          console.log("Problem in reading file", err);
        }
        res.setHeader("Content-Type", "text/html");
        res.end(content)
      })
    }
  })


});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
})

