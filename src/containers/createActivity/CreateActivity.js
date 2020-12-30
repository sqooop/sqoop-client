import TitleContainer from './TitleContainer';
import DateSelectorContainer from './DateSelectorContainer';
import TagSelectorContainer from './TagSelectorContainer';
const createActivity = () => {
  return (
    <>
      <TitleContainer />
      <DateSelectorContainer />
      <TagSelectorContainer />
    </>
  );
};

export default createActivity;
