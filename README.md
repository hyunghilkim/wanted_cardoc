# 원티드 백엔드 프리온보딩 7차 과제 - 카닥

</br>
</br>

## 🎤 개요

<br>

이 레포지토리는 [원티드 프리온보딩 백엔드 코스](https://www.wanted.co.kr/events/pre_onboarding_course_4) 7차 과제를 위해 만들어졌습니다. 

   일정 : 2021년 11월 22일(월) 오후 6시 ~ 11월 28일(월) 오후 2시

<br>
<br>



## 🧑🏻‍💻 소개

<br>


- [블로그](https://velog.io/@gusrlf14) 
- [github](https://github.com/hyunghilkim)  
- [프로젝트 회고](https://velog.io/@gusrlf14/%EC%9B%90%ED%8B%B0%EB%93%9C-%EC%9C%84%EC%BD%94%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EB%B0%B1%EC%97%94%EB%93%9C-7%ED%9A%8C%EC%B0%A8-%EA%B3%BC%EC%A0%9C-%ED%9A%8C%EA%B3%A0)


</div>

<br>
<br>
<br>


## 📕 과제 내용

### [필수 포함 사항]

- README 작성
    - 프로젝트 빌드, 자세한 실행 방법 명시
    - 구현 방법과 이유에 대한 간략한 설명
    - 서버 구조 및 디자인 패턴에 대한 개략적인 설명
    - 완료된 시스템이 배포된 서버의 주소
    - 해당 과제를 진행하면서 회고 내용 블로그 포스팅
- Swagger나 Postman을 이용하여 API 테스트 가능하도록 구현

</br>




</br>
</br>

## 📕 작업 효율 개선 방안

- Node.js, express, Sequelize를 이용하여 타이어 관련 Api를 구현하였습니다.
- 코드 컨벤션, 커밋 컨벤션, Git Flow를 지켜가며 작업했습니다.
- Github Project, 마일스톤을 활용해서 백로그, 이슈 관리를 진행했습니다.
- Service, Controller 등의 계층 분리를 통해 코드의 가독성을 높였습니다.
- 리팩토링을 통해 가독성을 높이고, 유지보수를 편하게 하기 위해 노력 했습니다.


</br>
</br>

## 💡 구현 기능

### [ 사용자 생성 API ]

- jwt 토큰을 사용하여, 인증을 구현 하였습니다.
- 인증된 사용자만 이후의 API를 호출하게 구현 하였습니다.

<br>

### [ 사용자가 소유한 타이어 정보를 저장하는 API ]

- 자동차 정보 조회 API를 사용하여, 타이어 정보를 받아 옵니다.
- 폭, 편평비, 휠사이즈로 항목별로 나누어 서로다른 컬럼에 저장하도록 구현 하였습니다.
- 최대 5명까지의 사용자에 대한 요청을 받게 예외처리를 하였습니다.


<br>

### [ 사용자가 소유한 타이어 정보 조회 API ]

- 저장한 타이어 정보를 조회할 수 있습니다.

<br>
<br>

## 🛠 실행 방법

- 레포지토리를 clone 받거나, 압축을 해제한 후 npm install을 통해 환경 셋팅을 진행합니다.
- npm start를 통해 서버를 구동합니다.
- src 폴더에 .env 파일을 설정해서, 환경변수를 설정합니다.
  - <details><summary><b>링크 접속불가 시 .env 파일 설정 방법</b></summary>

    ```
    
    PORT=4000
    JWT_SECERT="wanted"
    JWT_ALGO="HS256"
    HOST="http://localhost:4000"
    IS_SQLLITE=true

    ```


</details>


</br>
</br>


## 🗂 과제 확인 및 평가 API 명세서

- Postman을 활용하여 API 작동 테스트를 진행했습니다. 
- __배포된 서버 주소__ 및 자세한 API 명세는 아래에서 확인 가능합니다.
- [🗂 API Description Link](https://documenter.getpostman.com/view/6798114/UVJckGqs)
- [![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/6798114/UVJckGqs) 을 클릭하여 웹브라우저 혹은 Postman 클라이언트에 콜렉션이 로드되면
   1. Variables 탭에서 서버 Host와 Port를 지정합니다. (기본값이 지정되어 있습니다.)
   2. 그후 우측 상단의 Run 버튼을 눌러 RUN ORDER 화면에 진입한 뒤 Run \[Collection Name\]을 클릭하면, 이상적인 상황에서의 테스트가 진행됩니다.
       
   3. 요청마다 여러 이상적이지 않은 상황의 테스트에 대한 예시가 있습니다.</br>
 
</br>
</br>

## 🛠 Dependencies

</br>

<div align=center>
<img src="https://user-images.githubusercontent.com/48472537/143796841-80a85594-b12d-4caf-94c2-2b4b7ec38a28.png" height=850>
</div>


</br>
</br>


## 🌲 File Tree

</br>


```
📦src
 ┣ 📂bin
 ┃ ┗ 📜www.js
 ┣ 📂configs
 ┃ ┣ 📜db.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜secretKey.js
 ┣ 📂controllers
 ┃ ┣ 📜tireController.js
 ┃ ┗ 📜userController.js
 ┣ 📂globals
 ┃ ┣ 📜index.js
 ┃ ┣ 📜responseMessage.js
 ┃ ┣ 📜routes.js
 ┃ ┗ 📜statusCode.js
 ┣ 📂jobs
 ┃ ┗ 📜openTireAPI.js
 ┣ 📂libs
 ┃ ┣ 📜encryption.js
 ┃ ┗ 📜jwt.js
 ┣ 📂middlewares
 ┃ ┗ 📜auth.js
 ┣ 📂models
 ┃ ┣ 📜index.js
 ┃ ┣ 📜tire.js
 ┃ ┗ 📜user.js
 ┣ 📂routes
 ┃ ┣ 📜globalRouter.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜tireRouter.js
 ┃ ┣ 📜tokenRouter.js
 ┃ ┗ 📜userRouter.js
 ┣ 📂services
 ┃ ┣ 📜tireService.js
 ┃ ┗ 📜userService.js
 ┣ 📂utils
 ┃ ┣ 📂errors
 ┃ ┃ ┣ 📜commonError.js
 ┃ ┃ ┣ 📜errors.js
 ┃ ┃ ┣ 📜tokenError.js
 ┃ ┃ ┗ 📜userError.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜logger.js
 ┃ ┗ 📜resFormatter.js

```
