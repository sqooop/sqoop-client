<p align="center">
    <img src="https://user-images.githubusercontent.com/55784772/103595413-af25f880-4f3e-11eb-8821-8119d6b213cb.gif" alt="Logo" width="150" height="150">

  <h1 align="center">sqoop Web 👻</h2>
  <h2 align="center"> 🔵 질문을 통해 돌아보는 대학생 경험 정리 가이드 sqoop! ⚪️</h3>
</p>


## 📑 프로젝트 소개


### **SOPT 27TH APP JAM__WEB PART**
### **PROJECT PERIOD**
#### 2020.12.28 ~ 2021.01.16
### **TEAM CORE VALUE**
#### "EASY" "MOTIVATIVE" "DETAIL"


## 🙋‍♀️ 팀원 소개 및 역할 분담


|                                                            권소희                                                             |                                                            현주희                                                             |                                                            손예지                                                             |                                                            김민지                                                             |
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars3.githubusercontent.com/u/70877186?s=460&u=b80382a7a0abb0acbf147217eb41720a9d3e0a38&v=4" alt="profile" width="55" height="55"> | <img src="https://avatars1.githubusercontent.com/u/55863806?s=460&u=c65fa17d24b3d8c5603a24ea7c561879be7983ae&v=4" alt="profile" width="55" height="55"> | <img src="https://avatars3.githubusercontent.com/u/55784772?s=460&u=3b15b3f7c5ac71e8d20b5dbb6d34e00c89fc2f0a&v=4" alt="profile" width="55" height="55"> | <img src="https://avatars1.githubusercontent.com/u/48766355?s=460&u=0419d273d1a31539ee4f1151cdacb6fefd45dacc&v=4" alt="profile" width="55" height="55">
|                                             [sohee-K](https://github.com/sohee-K)                                             |                                          [Hyun-juhee](https://github.com/Hyun-juhee)                                          |                                            [yezgoget](https://github.com/yezgoget)                                            |                                              [mnxmnz](https://github.com/mnxmnz)                                              |
|                                                         활동 돌아보기                                                         |                                                         새 활동 추가                                                          |                                                            메인 홈                                                            |                                                        개별 활동 보기                                                         |
|                        git branch [[step-card]](https://github.com/sqooop/sqoop-client/tree/step-card)                        |                   git branch [[createActivity]](https://github.com/sqooop/sqoop-client/tree/createActivity)                   |                             git branch [[home]](https://github.com/sqooop/sqoop-client/tree/home)                             |                     git branch [[activity-one]](https://github.com/sqooop/sqoop-client/tree/activity-one)                     |


## 🔵 서비스 핵심 기능

### ⚪️ 활동 돌아보기(/steps/:id)

![step-card](/src/assets/images/stepCard.png)

💡 헤더
  - 활동 이름 표시
  - 이미 저장된 답변이 있을 경우에만 좌우 버튼으로 이동 가능

💡 현재 질문 카드
  - 카드 index에 따라 질문 표시
  - 답변 작성 영역(중복 공백 불가능, 최대 1000자)

💡 스쿱 저장 버튼
  - 답변이 빈 문자열일 경우 비활성화
  - 답변이 존재하는 경우 활성화
  - 활성화된 경우 hover시 스타일 변경
  - 활성화된 경우 클릭시 답변 저장 후 다음 카드로 넘어감

💡 이전 질문 카드
  - 이전 질문과 저장된 답변 내용 표시
  - hover시 스타일 변경
  - 클릭시 해당 카드의 수정 페이지로 넘어감

💡 다음 질문 카드
  - 다음 질문 내용 표시

💡 스쿱 진행률 & 애니메이션
  - 답변 작성률에 따라 진행률 표시 및 애니메이션 효과
  - 답변 작성률에 따라 청크 메세지 표시

💡 작성 완료 카드
  - 10개의 답변 모두 작성완료시 표시
  - 활동 돌아보기 버튼 클릭시 미리보기 뷰로 넘어감

### ⚪️ 새 활동 추가(/create)

💡 활동 내용 입력받기 
   - 제목
   - 소속 단체
   - 직무 태그
   - 역량 태그
   - 한줄 설명
   - 입력차 hover시 스타일 변경

💡 저장 완료 버튼
  - 제목, 직무 태그, 역량 태그 입력시 버튼 활성화
  - 활성화된 경우 hover시 스타일 변경

💡 저장 완료시 팝업(모달)
💡 사진 및 파일 입력받기

  
## 🔵 프로젝트 폴더 구조

```
│
├── assets
│   ├── icons
│   └── image
├── components
│   ├── home
│   ├── activityOne
│   └── createActivity
│   └── stepCard
│   └── common
├── containers
│   ├── home
│   ├── activityOne
│   └── createActivity
│   └── stepCard
│   └── common
├── font
├── lib
│   ├── api
│   ├── styles
├── pages
│   ├── home
│   ├── signin
│   └── createActivity
│   └── stepCard
│   └── common
├── stores
│   ├── modules
│   ├── index,js
├── App.js
└── serviceWorker.js
```

## 🔵 기술 스택 및 사용 라이브러리

```
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"antd": "^4.9.4",
"axios": "^0.21.1",
"global": "^4.4.0",
"prettier": "^2.2.1",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-redux": "^7.2.2",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.1",
"redux": "^4.0.5",
"styled-components": "^5.2.1",
"yarn": "^1.22.10"
```

## 🔵 깃 컨벤션 및 코드 컨벤션

### ➕ Git Branch 

- main - 개발 완료하고 최종 코드 올리는 브랜치
- develop - 각자 담당한 페이지 뷰 브랜치를 합쳐서 테스트 진행하는 브랜치
    - 각자 담당한 페이지 뷰 코드를 올리는 브랜치
    - home (홈  view)
    - createActivity (새 활동 추가 view)
    - step-card (활동 돌아보기 view)
    - activity-one (개별 활동 보기 view)

### ➕ Code Convention
- ESLint 및 Prettier
```
// .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid"
}
```
- lowerCamelCase

- 화살표 함수형으로 컴포넌트 선언하기
    - 화살표 함수형 컴포넌트 예시

```jsx
import React from 'react';

const Hashtag = () => {
  return <div></div>;
};

export default Hashtag;
```

#### 🔵 sqoop의 Server Repository

sqoop [Server](https://github.com/sqooop/sqoop-server)
