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
import Modal from '../../containers/createActivity/Modal.container';
import File from '../../containers/createActivity/File.container';
import DefaultData from '../../components/createActivity/DefaultData';

const CreateActivityWrap = styled.div`
  padding-left: 14.297vw;
  padding-right: 14.297vw;
`;

const ContentWrap = styled.div`
  margin-top: 1rem;
`;
const RightWrap = styled.div`
  padding-left: 8.2vw;
  /* background-color: blue; */
  float: left;
`;
const LeftWrap = styled.div`
  /* width: 27.28vw; */
  /* background-color: red; */
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
        <ContentWrap>
          <DefaultData text="한 줄 설명" />
          <Summary />
        </ContentWrap>
      </LeftWrap>

      <RightWrap>
        <Image />
        <ContentWrap>
          <DefaultData text="파일 첨부" />
          <File />
        </ContentWrap>
        <Button />
      </RightWrap>
      <Modal />
    </CreateActivityWrap>
  );
};

export default CreateActivity;
