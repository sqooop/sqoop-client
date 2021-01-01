import TitleContainer from './Title.container';
import DateSelectorContainer from './DateSelector.container';
import SkillTagSelectorContainer from '../common/SkillTagSelector.container';
import SummaryContainer from './Summary.container';
import Button from './Button.container';
const createActivity = () => {
  return (
    <>
      <TitleContainer />
      <DateSelectorContainer />
      <SkillTagSelectorContainer />
      <SummaryContainer />
      <Button />
    </>
  );
};

export default createActivity;
