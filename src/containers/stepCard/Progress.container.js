import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWrittenIndex } from '../../store/modules/cardIndex';
import Progress from '../../components/stepCard/Progress';

const ProgressContainer = () => {
  const cardIndex = useSelector(state => state.cardIndex);
  const { writtenIndex } = cardIndex;
  const answers = useSelector(state => state.userCardInfo.answers);

  const dispatch = useDispatch();
  // const saveAniIndex = data => dispatch(setAniIndex(data));
  const saveWrittenIndex = idx => dispatch(setWrittenIndex(idx));

  return <Progress answers={answers} saveCompleteIndex={saveWrittenIndex} />;
};

export default ProgressContainer;
