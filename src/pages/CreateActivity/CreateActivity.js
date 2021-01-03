import { React } from 'react';
import styled from 'styled-components';
import Title from '../../containers/createActivity/Title.container';
import Button from '../../containers/createActivity/Button.container';
import DateSelector from '../../containers/createActivity/DateSelector.container';
import Group from '../../containers/createActivity/Group.container';
import JobTagSelector from '../../containers/common/JobTagSelector.container';
import SkillTagSelector from '../../containers/common/SkillTagSelector.container';
import Summary from '../../containers/createActivity/Summary.container';
import Image from '../../containers/createActivity/Image.container';
import DefaultData from '../../components/createActivity/DefaultData';

const CreateActivityWrap = styled.div`
  padding-left: 183px;
  padding-right: 183px;
`;

const ContentWrap = styled.div`
  margin-top: 15px;
`;
const LastWrap = styled.div`
  margin-top: 12px;
`;
const RightWrap = styled.div`
  float: left;
`;
const LeftWrap = styled.div`
  width: 500px;
  float: left;
`;
const CreateActivity = () => {
  return (
    <CreateActivityWrap>
      <Title />
      <LeftWrap>
        <ContentWrap>
          <DefaultData text="활동 기간" isStar={true} />
          <DateSelector />
        </ContentWrap>
        <ContentWrap>
          <DefaultData text="소속 단체" />
          <Group />
        </ContentWrap>
        <ContentWrap>
          <DefaultData text="관련 직무" isStar={true} />
          <JobTagSelector />
        </ContentWrap>
        <ContentWrap>
          <DefaultData text="핵심 역량" isStar={true} />
          <SkillTagSelector />
        </ContentWrap>
        <LastWrap>
          <DefaultData text="한 줄 설명" />
          <Summary />
        </LastWrap>
      </LeftWrap>

      <RightWrap>
        <Image />
        <ContentWrap>
          <DefaultData text="파일 첨부" />
        </ContentWrap>
        <Button />
      </RightWrap>

      {/* <Button /> */}
    </CreateActivityWrap>
  );
};

export default CreateActivity;
