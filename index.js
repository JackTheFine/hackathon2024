const app = require("express")();
var express = require("express")
const path = require("path")
var port = "8080"
app.set("json spaces", 4);

//app.use(express.static("public", { extensions: ['html'] }));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/index.html')));


try {
  app.listen(port);
  console.log('on')
} catch (error) {
  console.error(error)
}

