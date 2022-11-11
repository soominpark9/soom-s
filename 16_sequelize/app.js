const express=require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static')); 
//정적 파일 보관할 폴더 설정
//css,js,img
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
app.use('/', indexRouter);
app.use('/user', userRouter); //localhost:PORT/user 경로를 기본으로 한다



app.get('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})