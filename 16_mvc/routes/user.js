const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

//경로 설정 = 라우팅
//여기서의 기본경로가 바뀐다 : localhost:PORT/user로

//GET 요청이 간다 => localhost;PORT/user/
router.get('/', controller.user);

module.exports = router;