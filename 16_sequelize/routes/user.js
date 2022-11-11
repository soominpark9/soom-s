const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

//기본 경로 localhost

//GET => localhost:PORT
router.get("/", controller.main);

router.get("/signup", controller.signup);  //여기서 get은 페이지를 띄워주기 위한 것

router.get("/signin", controller.signin);

router.post("/signup", controller.postsignupUser); //Cuser한테 받은 정보를 axios한테 전달 하기 위해 씀

router.post("/signin", controller.postsigninUser);

router.post("/profile", controller.eachUser);

router.post("/profile/edit", controller.posteditUser);

router.post("/profile/delete", controller.deleteUser);

module.exports = router;