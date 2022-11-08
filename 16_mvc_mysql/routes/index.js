const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();


//기본 경로 localhost

//GET => localhost:PORT
router.get("/", controller.main);

//GET => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors); //전체조회

//post /visitor/write => localhost: PORT/visitor.write
router.post("/visitor/write", controller.postVisitor); //하나 추가

// DELETE /visitor/delete => localhost:PORT/visitor/delete
router.delete('/visitor/delete', controller.deleteVisitor); // 하나 삭제


module.exports = router;
