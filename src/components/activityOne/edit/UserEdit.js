import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

const ActivityOneUserData = props => {
  const { text, onChange, question, index } = props;

  return (
    <StyledUserData className="UserData">
      <>
        <StyledQuestionData>
          {index}. {question}
        </StyledQuestionData>
        <StyledAnswerData>
          <TextareaAutosize
            className="AnswerData"
            value={text}
            onChange={onChange}
          />
        </StyledAnswerData>
      </>
    </StyledUserData>
  );
};

const StyledUserData = styled.div`
<<<<<<< HEAD
  width: 41.6vw;
=======
  width: 43.3vw;
>>>>>>> 2451068b34357ce8ce7456a47d60c72242cb6ac6
`;

const StyledQuestionData = styled.div`
  margin-bottom: 0.9vw;
  font-size: 1vw;
  font-weight: 700 !important;
  line-height: 150%;
`;

const StyledAnswerData = styled.div`
  .AnswerData {
<<<<<<< HEAD
    width: 39.1vw;
    margin-left: 8px;
=======
    width: 43.3vw;
    padding-left: 8px;
>>>>>>> 2451068b34357ce8ce7456a47d60c72242cb6ac6
    font-size: 0.8vw;
    font-weight: 400 !important;
    line-height: 150%;
    border: none;
    outline: none;
    resize: none;
    margin-bottom: 2.5vw;

    :hover {
      background-color: #eeeeee;
    }
  }
`;

export default ActivityOneUserData;
