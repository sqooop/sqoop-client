import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PhotoUpload from './Image.container';
import EditList from '../../../components/activityOne/global/EditList';
import DateSelector from './DateSelector.container';
import Group from './Group.container';
import JobTagSelector from './JobTagSelector.container';
import SkillTagSelector from './SkillTagSelector.container';
import Summary from './Summary.container';
import FileUpload from './File.container';

const BasicDataContainer = () => {
  const detail = useSelector(state => state.detail);

  const [hoverItem, setHoverItem] = useState(true);

  const hoverBackground = event => {
    setHoverItem(false);
  };

  const unhoverBackground = event => {
    setHoverItem(true);
  };

  return (
    <StyledBasicData>
      <PhotoUpload />
      <StyledContentWrap>
        <EditList text="활동 기간" isStar={true} />
        <StyledBasic style={{ height: '1.6vw' }}>
          <DateSelector />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="소속 단체" />
        <StyledBasic style={{ height: '1.6vw' }}>
          <Group value={detail.detailGroup} />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="관련 직무" isStar={true} />
        <StyledBasic style={{ height: '1.6vw' }}>
          <JobTagSelector />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="핵심 역량" isStar={true} />
        <StyledBasic style={{ height: '1.6vw' }}>
          <SkillTagSelector />
        </StyledBasic>
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="파일 첨부" />
        {hoverItem === true ? (
          <StyledBasic
            onMouseEnter={hoverBackground}
            onMouseLeave={unhoverBackground}
            style={{
              height: '1.6vw',
              cursor: 'pointer',
            }}
          >
            <FileUpload />
          </StyledBasic>
        ) : (
          <StyledBasic
            onMouseEnter={hoverBackground}
            onMouseLeave={unhoverBackground}
            style={{
              height: '1.6vw',
              cursor: 'pointer',
              backgroundColor: '#eeeeee',
            }}
          >
            <FileUpload />
          </StyledBasic>
        )}
      </StyledContentWrap>
      <StyledContentWrap>
        <EditList text="한 줄 설명" />
        <StyledBasic>
          <Summary />
        </StyledBasic>
      </StyledContentWrap>
    </StyledBasicData>
  );
};

const StyledBasicData = styled.div`
  width: 27.9688vw;
  margin-bottom: 6.1111vw;

  a {
    color: rgba(0, 0, 0, 0.85);
    text-decoration: none;
  }
`;

const StyledContentWrap = styled.div`
  display: flex;
  margin-top: 0.8vw;
`;

const StyledBasic = styled.div`
  width: 18.8vw;
  font-size: 1.1vw;
  font-weight: 400;
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 1.275vw;
    height: 1.275vw;
    position: absolute;
    top: 0.2344vw;
    right: 0.2344vw;
    cursor: pointer;
  }
`;

export default BasicDataContainer;
