// JavaScript source code
const express = require('express')
const app = express()
const port = 5000
const bodyPharser = require('body-parser');
const config = require('./config/key');
const {User} = require("./models/User");
app.use(bodyPharser.urlencoded({extended: true})); //x-www-form-urlencoded형식의 body를 처리한다 는 뜻
app.use(bodyPharser.json());                      //json파일을 처리한다 라는 뜻


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
	
}).then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!~~안녕'))
//야발 이건 언제 바꿨대

app.post('/register', (req, res) => {
  
  /*
  req.body 형식
  {
    id : "hello",
    password : "123"
  }
  */
  const user = new User(req.body)

  user.save((err, userInfo)=> {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })//mongo db에서 오는 함수
  //userInfo는 뭐임;;



})
//클라이언트에서 보내주는 이메일 아이디 패스워드 등 회원가입시 필요한 정보들을 가져오면
//그것들을 데이터 베이스에 넣어준다.
//그것을 가져오기 위해 ./models/User을 가져온다

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/* 명령어 정리 */
/*
npm run start
  package.json 에 start에 지정된 파일을 실행 이번같은 경우 index.js





*/