import React from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const CareerInfoWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  box-sizing: border-box;

  .career {
    &--title {
      font-weight: bold;
    }
    &--container {
      margin-top: 26px;
      margin-left: 14px;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .title {
    box-sizing: border-box;
    width: 90px;
    display: inline-block;
  }

  .content {
    margin-bottom: 14px;
  }

  input {
    border: none;
    padding: 0;
    width: 200px;
    margin-right: 24px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
`;

const getDefault = (placeholder, title, type) => {
  switch (type) {
    case '어학':
      placeholder.title = 'ex) 영어, 중국어, 일본어';
      placeholder.testName = 'ex) TOEIC, IELTS, HSK';
      placeholder.score = 'ex) 940점, 6급';
      title.title = '언어';
      title.date = '시험 일자';
      title.testName = '시험명';
      title.score = '점수/급수';
      return;
    case '자격증':
      placeholder.title = 'ex) 건축기능사, 조리기능사';
      placeholder.testName = 'ex) 발행 기관 입력';
      title.title = '자격증명';
      title.date = '합격일';
      title.testName = '기관명';
      return;
    case '수상 내역':
      placeholder.title = 'ex) 수상명 입력';
      placeholder.testName = 'ex) 수여 기관 입력';
      title.title = '수상명';
      title.date = '수상/공모일';
      title.testName = '기관명';
      return;
    default:
      return;
  }
};

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

const CareerInfo = ({ type, data, match }) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;
  const placeholder = { title: '', testName: '', score: '' };
  const title = { title: '', date: '', testName: '', score: '' };
  getDefault(placeholder, title, type);

  const CareerContainer = career => {
    return (
      <>
        <div className="career--container">
          <div className="career--container__title content">
            <span className="title">{title.title}</span>
            <input
              type="text"
              readOnly={isReadOnly}
              value={career.title}
              placeholder={placeholder.title}
            />
          </div>
          <div className="career--container__date content">
            <span className="title">{title.date}</span>
            <input
              type="text"
              readOnly={isReadOnly}
              value={career.date}
              placeholder={getToday()}
            />
          </div>
          <div className="career--container__testName content">
            <span className="title">{title.testName}</span>
            <input
              type="text"
              readOnly={isReadOnly}
              value={career.testName}
              placeholder={placeholder.testName}
            />
          </div>
          <div className="career--container__score content">
            <span className="title">{title.score}</span>
            {type === '어학' ? (
              <input
                type="text"
                readOnly={isReadOnly}
                value={career.score}
                placeholder={placeholder.score}
              />
            ) : (
              <input type="text" value="" />
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <CareerInfoWrap>
      <div className="career--title">{type}</div>
      {data ? (
        data.map(career => (
          <CareerContainer key={career.title} career={career} />
        ))
      ) : (
        <CareerContainer key={''} career={''} />
      )}
    </CareerInfoWrap>
  );
};

export default withRouter(CareerInfo);
