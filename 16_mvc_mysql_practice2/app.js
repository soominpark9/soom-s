const express = require('express');
const app = express();
const PORT = 8200;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
// const xxx= require('./routes/user');
// app.use('/user',xxx)

// TODO: 404 에러 처리

const userRouter =require('./routes/user');
app.use('/user', userRouter);


app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
