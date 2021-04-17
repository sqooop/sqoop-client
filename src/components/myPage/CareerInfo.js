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

  .background {
    position: absolute;
    width: 730px;
    height: 84px;
    margin-top: 36px;
    z-index: 1;
  }

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
  }
`;

const CareerInfo = ({ type, data, saveData, match }) => {
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
                saveData(newCareer);
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
              saveData(newData);
            }}
          />
        )}
      </div>
      {data ? (
        data.map((career, index) => (
          <>
            <div
              className="background"
              onClick={() => {
                isReadOnly
                  ? setCurrentTarget('')
                  : setCurrentTarget('deleteCareer');
                setCareerIndex(index);
              }}
              style={
                index === careerIndex && currentTarget === 'deleteCareer'
                  ? { backgroundColor: '#EEEEEE' }
                  : { backgroundColor: 'white' }
              }
            ></div>
            <CareerContainer
              index={index}
              key={career.testName}
              career={career}
              type={type}
              currentTarget={currentTarget}
              setCurrentTarget={setCurrentTarget}
              careerIndex={careerIndex}
              setCareerIndex={setCareerIndex}
            />
          </>
        ))
      ) : (
        <CareerContainer
          key={''}
          career={''}
          type={type}
          currentTarget={currentTarget}
          setCurrentTarget={setCurrentTarget}
          careerIndex={careerIndex}
          setCareerIndex={setCareerIndex}
        />
      )}
    </CareerInfoWrap>
  );
};

export default withRouter(CareerInfo);
