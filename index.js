var express = require("express");
var multer = require("multer");

const port = 3000 || process.env.PORT;

const upload = multer({ dest: "uploads/" });
const app = express();

app.post("/upload", upload.single("file"), (req, res, next) => {
  console.info(`FileName: ${req.file.filename}`);
  console.info(`Data Field: ${req.body.dataField}`);
  res.status(201).send({
    fileName: req.file.filename,
    dataField: req.body.dataField
  });
});

app.get("/sayHello", (req, res, next) => {
  console.log("you called hello world");
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Dapr app listening on port ${port}`);
});
