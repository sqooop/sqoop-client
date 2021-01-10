import styled from 'styled-components';
import DateSelector from '../../containers/filterActivities/DateSelector.container';
import JobTag from '../../containers/filterActivities/JobTag.container';
import SkillTag from '../../containers/filterActivities/SkillTag.container';
import Button from '../../containers/filterActivities/Button.container';
const StyledDiv = styled.div`
  font-size: 14px;
  margin-top: 44px;
  padding-bottom: 4px;
`;
const Wrap = styled.div`
  padding-left: 10px;
`;
const Filter = props => {
  return (
    <Wrap>
      <StyledDiv style={{ marginTop: '40px' }}>활동 기간</StyledDiv>
      <DateSelector />
      <StyledDiv>관련 직무</StyledDiv>
      <JobTag />
      <StyledDiv>핵심 역량</StyledDiv>
      <SkillTag />
      <Button />
    </Wrap>
  );
};

export default Filter;
