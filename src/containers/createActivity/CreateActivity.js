import TitleContainer from './Title.container';
import DateSelectorContainer from './DateSelector.container';
import SkillTagSelectorContainer from './SkillTagSelector.container';
import SummaryContainer from './Summary.container';
const createActivity = () => {
  return (
    <>
      <TitleContainer />
      <DateSelectorContainer />
      <SkillTagSelectorContainer />
      <SummaryContainer />
    </>
  );
};

export default createActivity;
