import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAnswer } from '../../store/modules/userCardInfo';
import {
  setTextValue,
  setTextLimit,
  setSaved,
  setNotSaved,
} from '../../store/modules/currentCard';
import CurrentCard from '../../components/stepCard/CurrentCard';
import { createCard, updateCard } from '../../lib/api/stepCard';

const CurrentCardContainer = ({ history }) => {
  const userCardInfo = useSelector(state => state.userCardInfo);
  const { questions, answers, guide, id } = userCardInfo;
  const cardIndex = useSelector(state => state.cardIndex);
  const { currentIndex, writtenIndex } = cardIndex;
  const currentCard = useSelector(state => state.currentCard);
  const { saved, notSaved, textValue, textLimit } = currentCard;

  const dispatch = useDispatch();
  const saveAnswer = (answer, idx) => dispatch(setAnswer(answer, idx));
  const saveTextValue = text => dispatch(setTextValue(text));
  const saveSaved = data => dispatch(setSaved(data));
  const saveNotSaved = data => dispatch(setNotSaved(data));
  const saveTextLimit = number => dispatch(setTextLimit(number));

  const onClickFunc = () => {
    saveAnswer(textValue, currentIndex);
    saveSaved(true);
    const card = {
      ActivityId: id,
      number: currentIndex + 1,
      question: questions[currentIndex],
      content: answers[currentIndex],
    };

    if (currentIndex === writtenIndex) {
      (async () => {
        await createCard(card);
      })();
      setTimeout(() => {
        saveTextValue(answers[currentIndex + 1]);
        history.push(`/steps/${currentIndex + 1}`);
      }, 2000);
    } else {
      (async () => {
        await updateCard(card);
      })();
    }
  };

  return (
    <CurrentCard
      index={currentIndex}
      question={questions[currentIndex]}
      answer={answers[currentIndex]}
      textValue={textValue}
      saveTextValue={saveTextValue}
      saved={saved}
      saveSaved={saveSaved}
      notSaved={notSaved}
      saveNotSaved={saveNotSaved}
      textLimit={textLimit}
      saveTextLimit={saveTextLimit}
      guide={guide[currentIndex]}
      onClickFunc={onClickFunc}
    />
  );
};

export default withRouter(CurrentCardContainer);
