import express from "express";
import dotenv from "dotenv";

// 환경설정 파일을 불러오는 도구가 필요함 => 그래서 필요한게 dotnev 패키지
// 환경설정 파일을 불러오는 dotenv 패키지 호출
dotenv.config();

// backend를 구성하는 express 패키지를 이용해 앱 만들기
const app = express();

// 환경 변수중 key가 PORT인 값을 가져옴
const PORT = process.env.PORT;

if (isNaN(Number(PORT))) {
    console.log("PORT에 오류가 존재합니다.")
    // 프로그램 종료 코드
    process.exit(1);
}

// 실제 app 을 구동
// app.listen(여는 포트번호, 서버가 실행되면서 해야하는 함수)
app.listen(8000, () => {
    console.log(`서버 실행됨! http://localhost:${PORT}`);
})