import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 로그인 기능 구현
function LoginWrap() {
  // 로그인 할 때 token 값을 session에 저장
  const loginActive = window.sessionStorage.getItem('token');

  // 로그인 여부 확인
  const loginFlag = loginActive !== null ? true : false;

  // 로그인 email 및 password 저장
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 사용자에게 input 받음
  const changeInput = e => {
    let name = e.target.name;
    if (name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  // 로그인을 하면 직전 화면으로 돌아감
  useEffect(() => {
    if (loginFlag) {
      window.history.go(-1);
    }
  }, []);

  // 마우스로 로그인 버튼을 누르지 않고 엔터키를 눌러도 로그인이 됨
  const enterKey = () => {
    if (window.event.keyCode === 13) {
      LoginSubmit();
    }
  };

  // 세션 이름과 값을 저장하는 함수
  const sessionSave = (seesionName, sessionData) => {
    window.sessionStorage.setItem(seesionName, sessionData);
  };

  // 서버 로그인 API 소통 함수
  const LoginSubmit = async () => {
    if (email && password !== '') {
      // 서버에게 입력 받은 email과 password를 보냄
      const response = await fetch('서버 로그인 API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(async response => {
          // 로그인 성공 후 서버에게 받은 응답에서 토큰과 사용자 이름을 세션으로 저장함
          const response_json = await response.json();
          const member = response_json.token.token;
          const nameinfo = response_json.user.name;
          sessionSave('token', member);
          sessionSave('nameinfo', nameinfo);
        })
        .then(() => {
          alert('로그인에 성공하셨습니다.');
          window.history.go(0);
        })
        .catch(e => {
          alert('로그인에 실패하셨습니다.');
          console.log(e);
        });
      return response;
    } else {
      alert('Email&Password를 입력해 주세요.');
    }
  };

  return <div></div>;
}

export default LoginWrap;
