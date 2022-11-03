const express = require("express");
const { METHODS } = require("http");
const app = express();
const PORT = 8030;

const multer = require("multer");
const path = require("path");
const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // const ext = path.extname(file.originalname);
      const ext = path.extname(req.body.userId);

      // done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      done(null, req.body.userId + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", function (req, res) {
  res.render("index", { title: "파일 업로드를 실습31!!!" });

});

app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
   
  console.log(req.file);
  console.log(req.body);
  console.log(req.body.userId);

  res.render("result", {
    userId: req.body.userId,
    userPw: req.body.userPw,
    name: req.body.name,
    age: req.body.age,
    img: req.file.path,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
