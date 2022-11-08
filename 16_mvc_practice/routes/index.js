const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser.js");


console.log(controller);
//routes는 경로만 설정하는 곳!!
//기본경로 실행 
router.get("/", controller.main);

//post /practice30
//포스트 요청들어왔을때 practice30 실행
//기본경로 localhost:8000/practice30
router.post('/practice30', controller.practice30);

module.exports = router;
