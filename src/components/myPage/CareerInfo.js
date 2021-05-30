import React, { useState } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Plus from '../../assets/icons/Plus.svg';
import Minus from '../../assets/icons/Minus.svg';
import MinusOff from '../../assets/icons/MinusOff.svg';
import CareerContainer from './CareerContainer';

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
      width: 730px;
      height: 24px;
      display: flex;
      flex-direction: row;
      justify-content: left;

      &__name {
        font-weight: bold;
        position: relative;
        z-index: 2;
      }
      &__empty {
        flex: 1;
      }
      &__plus {
        margin-left: 8px;
      }
    }
    &__empty {
      margin: 12px;
      color: #A5A5A5;
    }
  }
`;

const CareerInfo = ({ type, data, origin, saveData, match }) => {
  const isReadOnly = match.path === '/mypage/profile' ? true : false;
  const [currentTarget, setCurrentTarget] = useState('');
  const [careerIndex, setCareerIndex] = useState('');

  return (
    <CareerInfoWrap>
      <div className="career--title">
        <div className="career--title__name">{type}</div>
        <div className="career--title__empty"></div>
        {isReadOnly ||
          (currentTarget === 'deleteCareer' ? (
            <img
              className="career--title__minus"
              src={Minus}
              style={{ cursor: 'pointer' }}
              alt=""
              onClick={() => {
                const newCareer = data.filter((career, idx) => {
                  return idx !== careerIndex;
                });
                const typeName =
                  type === '어학'
                    ? 'langHistory'
                    : type === '자격증'
                    ? 'certificateHistory'
                    : 'awardHistory';
                saveData({ ...origin, [typeName]: newCareer });
              }}
            />
          ) : (
            <img
              className="career--title__minus"
              src={MinusOff}
              style={{ cursor: 'default' }}
              alt=""
            />
          ))}
        {isReadOnly || (
          <img
            className="career--title__plus"
            src={Plus}
            style={{ cursor: 'pointer' }}
            alt=""
            onClick={() => {
              const typeNum = type === '어학' ? 1 : type === '자격증' ? 2 : 3;
              const newData = data.concat({
                title: '',
                date: '',
                testName: '',
                score: '',
                type: typeNum,
              });
              const typeName =
                type === '어학'
                  ? 'langHistory'
                  : type === '자격증'
                  ? 'certificateHistory'
                  : 'awardHistory';
              saveData({ ...origin, [typeName]: newData });
            }}
          />
        )}
      </div>
      {data.length > 0 ? (
        data.map((career, index) => (
          <>
            <CareerContainer
              index={index}
              key={index}
              career={career}
              saveData={saveData}
              type={type}
              origin={origin}
              data={data}
              currentTarget={currentTarget}
              setCurrentTarget={setCurrentTarget}
              careerIndex={careerIndex}
              setCareerIndex={setCareerIndex}
            />
          </>
        ))
      ) : (
        <p className="career__empty">추가해주세요</p>
      )}
    </CareerInfoWrap>
  );
};

export default withRouter(CareerInfo);
