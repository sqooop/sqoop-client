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
      display: flex;
      flex-direction: row;
      justify-content: left;

      &__name {
        font-weight: bold;
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
              alt=""
              onClick={() => {
                // const newEducation = education.filter((edu, idx) => {
                //   return idx !== schoolIndex;
                // });
                // saveEducation(newEducation);
              }}
            />
          ) : (
            <img className="career--title__minus" src={MinusOff} alt="" />
          ))}
        {isReadOnly || (
          <img
            className="career--title__plus"
            src={Plus}
            alt=""
            onClick={() => {
              // console.log(data);
              // saveData(
              //   data.concat({
              //     title: '',
              //     date: '',
              //     testName: '',
              //     score: '',
              //   }),
              // );
            }}
          />
        )}
      </div>
      {data ? (
        data.map((career, index) => (
          <CareerContainer
            index={index}
            key={career.title}
            career={career}
            type={type}
            currentTarget={currentTarget}
            setCurrentTarget={setCurrentTarget}
            careerIndex={careerIndex}
            setCareerIndex={setCareerIndex}
          />
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
