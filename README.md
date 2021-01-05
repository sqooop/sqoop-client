# Sqoop Web👻
![ezgif com-gif-maker](https://user-images.githubusercontent.com/55784772/103595413-af25f880-4f3e-11eb-8821-8119d6b213cb.gif)

### 🔵 질문을 통해 돌아보는 대학생 경험 정리 가이드 Sqoop! ⚪️

  **SOPT 27TH APP JAM__WEB PART**
<br/>
 **PROJECT PERIOD** |   2020.12.28 ~ 2021.01.16
<br/>
 **CORE VALUE** |  "EASY"  "MOTIVATIVE"  "DETAIL"<br/>

***


### 🔵팀원 소개 및 역할 분담
|  권소희  |  현주희  |  손예지  |  김민지  |
| :------------------------------------------: | :--------------------------------------------: | :---------------------------------------------: | :-------------------------------------------: |
| ![ezgif com-gif-maker](https://user-images.githubusercontent.com/55784772/103595413-af25f880-4f3e-11eb-8821-8119d6b213cb.gif) | ![ezgif com-gif-maker](https://user-images.githubusercontent.com/55784772/103595413-af25f880-4f3e-11eb-8821-8119d6b213cb.gif) | ![ezgif com-gif-maker](https://user-images.githubusercontent.com/55784772/103595413-af25f880-4f3e-11eb-8821-8119d6b213cb.gif) | ![ezgif com-gif-maker](https://user-images.githubusercontent.com/55784772/103595413-af25f880-4f3e-11eb-8821-8119d6b213cb.gif)  |
| [sohee-K](https://github.com/sohee-K) | [Hyun-juhee](https://github.com/Hyun-juhee) | [yezgoget](https://github.com/yezgoget) | [mnxmnz](https://github.com/mnxmnz) |
| 활동 돌아보기 | 새 활동 추가 | 메인 홈 | 개별 활동 보기 |
| git branch [[step-card]](https://github.com/sqooop/sqoop-client/tree/step-card) | git branch [[createActivity]](https://github.com/sqooop/sqoop-client/tree/createActivity) | git branch [[home]](https://github.com/sqooop/sqoop-client/tree/home) | git branch [[activity-one]](https://github.com/sqooop/sqoop-client/tree/activity-one) |

***

### 🔵서비스 핵심 기능
#### 뷰와 함께 설명 + 기능명세서

### 🔵프로젝트 폴더 구조
```
│
├── assets
│   ├── icons
│   └── image
├── components
│   ├── Home
│   ├── ActivityOne
│   └── CreateActivity
│   └── stepCard
│   └── common
├── containers
│   ├── Home
│   ├── ActivityOne
│   └── CreateActivity
│   └── stepCard
│   └── common
├── font
├── lib
│   ├── api
│   ├── styles
├── pages
│   ├── Home
│   ├── signin
│   └── CreateActivity
│   └── stepCard
│   └── common
├── stores
│   ├── modules
│   ├── index,js
├── App.js
└── serviceWorker.js
```

### 🔵기술 스택 및 사용 라이브러리
### 🔵깃 컨벤션 및 코드 컨벤션

#### ➕ Git Commit Message Convention
- [CREATE] 새로운 기능 추가
- [FIX] 버그 수정
- [DOCS] 문서수정
- [STYLE] 코드포맷팅
- [REFACTOR] 코드 리펙토링
- [TEST] 테스트 코드 추가
- [CHORE] 빌드 업무 수정

#### ➕ Git Branch 
- main - 개발 완료하고 최종 코드 올리는 브랜치
- develop - 각자 담당한 페이지 뷰 브랜치를 합쳐서 테스트 진행하는 브랜치
    - 각자 담당한 페이지 뷰 코드를 올리는 브랜치
    - home (홈  view)
    - createActivity (새 활동 추가 view)
    - step-card (활동 돌아보기 view)
    - activity-one (개별 활동 보기 view)
#### ➕ Code Convention
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
-lowerCamelCase


- 화살표 함수형으로 컴포넌트 선언하기
    - 화살표 함수형 컴포넌트 예시

```jsx
import React from 'react';

const Hashtag = () => {
  return <div></div>;
};

export default Hashtag;
```
### 🔵Sqoop의 다른 프로젝트

Sqoop [Server](https://github.com/sqooop/sqoop-server)
