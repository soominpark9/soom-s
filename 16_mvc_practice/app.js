const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




const userRouter = require('./routes');
//기본경로 
app.use('/', userRouter)


// app.get('/', (req, res) => {  -<컨트롤러에 정의함
//   res.render('index', { title: '동적 폼 실습' });
// });

// app.post('/practice30', (req, res) => {-<컨트롤러에 정의함
//   console.log(req.body);

//   if (realId === req.body.userId && realPw === req.body.userPw) { --> 라우터에 연결함
//     res.send({ userInfo: req.body, isSuccess: true });
//   } else {
//     res.send({ isSuccess: false });
//   }
// });

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});


//모델 -> 컨트롤러 -> 라우터 순으로 하면 편리 아님 반대로 하거나