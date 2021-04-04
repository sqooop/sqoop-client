import React, { useState } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const ActivityOneUserData = props => {
  const { text, onChange, question, index } = props;

  const [hoverItem, setHoverItem] = useState(true);
  const [background, setBackground] = useState(false);

  const hoverBackground = event => {
    setHoverItem(false);
    setBackground(true);
  };

  const unhoverBackground = event => {
    setHoverItem(true);
    setBackground(false);
  };

  return (
    <StyledUserData className="UserData">
      <>
        <StyledQuestionData>
          {index}. {question}
        </StyledQuestionData>
        {hoverItem === true ? (
          <StyledAnswerData>
            <TextareaAutosize
              className="AnswerData"
              value={text}
              onChange={onChange}
              onMouseEnter={hoverBackground}
              onMouseLeave={unhoverBackground}
            />
            {background === true ? (
              <StyledCount>{text.length}/1000</StyledCount>
            ) : (
              <StyledNone />
            )}
          </StyledAnswerData>
        ) : (
          <StyledHoverData>
            <TextareaAutosize
              className="AnswerData"
              value={text}
              onChange={onChange}
              onMouseEnter={hoverBackground}
              onMouseLeave={unhoverBackground}
            />
            {background === true ? (
              <StyledCount>{text.length}/1000</StyledCount>
            ) : (
              <StyledNone />
            )}
          </StyledHoverData>
        )}
      </>
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
  width: 43.3vw;
`;

const StyledQuestionData = styled.div`
  margin-bottom: 12px;
  font-size: 1vw;
  font-weight: 700 !important;
`;

const StyledAnswerData = styled.div`
  margin-bottom: 12px;

  .AnswerData {
    width: 43.3vw;
    padding-left: 8px;
    font-size: 0.8vw !important;
    font-weight: 400 !important;
    border: none !important;
    outline: none !important;
    resize: none !important;
  }
`;

const StyledHoverData = styled.div`
  margin-bottom: 12px;
  background-color: yellow;

  .AnswerData {
    width: 43.3vw;
    padding-left: 8px;
    font-size: 0.8vw !important;
    font-weight: 400 !important;
    border: none !important;
    outline: none !important;
    resize: none !important;
    background-color: #eeeeee;
  }

  background-color: #eeeeee;
`;

const StyledCount = styled.div`
  width: 43.3vw;
  height: 23px;
  font-size: 10px !important;
  font-weight: 400 !important;
  text-align: right;
  padding-right: 8px;
  margin-top: 0px;
  background-color: #eeeeee;
  color: #a5a5a5;
`;

const StyledNone = styled.div`
  width: 43.3vw;
  height: 23px;
  background-color: white;
  color: white;
`;

export default ActivityOneUserData;
