// JavaScript source code
const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { auth } = require('./middleware/auth');
const { User } = require("./models/User");
app.use(bodyParser.urlencoded({ extended: true })); //x-www-form-urlencoded형식의 body를 처리한다 는 뜻
app.use(bodyParser.json());                      //json파일을 처리한다 라는 뜻
app.use(cookieParser());

const mongoose = require('mongoose');
const { json } = require('body-parser');
mongoose.connect(config.mongoURI, {

}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!~~안녕'))
//야발 이건 언제 바꿨대

app.post('/api/user/register', (req, res) => {

  /*
  req.body 형식
  {
    id : "hello",
    password : "123"
  }
  */
  const user = new User(req.body)

  user.save((err, user) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })//mongo db에서 오는 함수
  //userInfo는 뭐임;;

})
//클라이언트에서 보내주는 이메일 아이디 패스워드 등 회원가입시 필요한 정보들을 가져오면
//그것들을 데이터 베이스에 넣어준다.
//그것을 가져오기 위해 ./models/User을 가져온다


app.post('/api/user/login', (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."//point
      })
    }
    //요청된 이메일이 있다면 비밀번호가 같은지 찾는다.
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      //비밀번호까지 맞다면 토큰을 생성하기
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        //토큰을 저장한다. 어디에? 쿠키, 로컬 스토리지 등등
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
})

app.get('/api/user/auth', auth , (req,res)=>{
  //auth 통과
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0? false: true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})//왜 get인가?

app.get('/api/user/logout', auth, (req, res)=>{
  User.findOneAndUpdate({_id: req.user._id},
    {token: ""},
    (err, user)=>{
      if(err) return res.json({ success: false, err});
      return res.status(200).send({
        success: true
      })
    })
})

app.get('/api/hello', (req,res)=> {
  res.send("안녕하세요~")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/* 명령어 정리 */
/*
npm run start
  package.json 에 start에 지정된 파일을 실행 이번같은 경우 index.js





*/