import React, { useState } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Select } from 'antd';
const { Option } = Select;

const InterestInfoWrap = Styled.div`
  width: 730px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin-top: 61px;
  margin-bottom: 14px;
  color: black;

  .sector {
    width: 358px;
  }

  .title {
    font-weight: bold;
    margin-bottom: 26px;
  }

  .classify__big {
    margin-bottom: 15px;
  }

  span {
    margin-left: 14px;
    width: 90px;
    display: inline-block;
  }

  input {
    border: none;
    padding: 1px 0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #A5A5A5;
    }
  }
`;

const InterestInfo = ({ jobBig, jobSmall, skillBig, skillSmall, match }) => {
  const jobBigList = [
    '경영/사무',
    '마케팅/무역/유통',
    '영업/고객상담',
    'IT/인터넷',
    '연구 개발/설계',
    '생산/제조',
    '전문/특수직',
    '디자인',
    '미디어',
    '서비스',
    '건설',
  ];
  const jobSmallList = {
    '경영/사무': [
      '기획/전략/경영',
      '인사/노무/교육',
      '재무/세무/IR',
      '일반 사무/총무/법무',
      '경리/회계/결산',
      '비서/사무 보조',
    ],
    '마케팅/무역/유통': [
      '마케팅/광고',
      '유통/물류/ 재고',
      '홍보 /PR',
      '무역/해외영업',
      '구매/자재',
      '운전/운송',
      '상품 기획/MD',
    ],
    '영업/고객상담': [
      '제품/서비스 영업',
      '금융/보험 영업',
      '광고 영업',
      '기술 영업',
      '영업 관리/영업 지원',
      '채권/심사',
      '아웃바운드/TM',
      '고객센터/인바운드/CS',
    ],
    'IT/인터넷': [
      'QA/테스터/검증',
      '네트워크/서버/보안/DBA',
      '서비스 기획/PM',
      '웹/앱 프로그래머',
      '응용 프로그래머',
      '시스템 프로그래머',
      'SE/시스템 분석/설계',
      'IT/컴퓨터 교육',
    ],
    '연구 개발/설계': [
      '자동차/조선/기계',
      '반도체/디스플레이',
      '화학/에너지/환경',
      '전기/전자/제어',
      '기계 설계/CAD/CAM',
      '통신기술/네트워크 구축',
      '건설/설계/인테리어',
      '인문/사회과학',
      '바이오/제약/식품',
    ],
    '생산/제조': [
      '생산 관리/공정 관리/품질 관리',
      '생산/제조/설비/조립',
      '설치/정비/AS/시공/공무',
    ],
    '전문/특수직': [
      '경영 분석/컨설턴트',
      '리서치/통계/사서',
      '외국어/번역/통역',
      '법률/특허/상표',
      '회계/세무',
      '보안/경비/경호',
      '보건/의료',
      '중고등교사/학원강사',
      '초등/유치원/보육교사',
      '외국어/자격증/기술강사',
      '사회복지/요양보호/자원봉사',
      '교육개발/기획',
    ],
    디자인: [
      '그래픽 디자인/CG',
      '출판/편집 디자인',
      '제품/산업 디자인',
      '캐릭터/애니메이션',
      '광고/시각 디자인',
      '건축/인테리어 디자인',
      '의류/패션/잡화 디자인',
      '웹/앱 디자인',
      '문화 콘텐츠/문화 예술',
      '디자인 기타',
    ],
    미디어: [
      '연출/제작/PD',
      '아나운서/리포터/성우',
      '영상/카메라/촬영',
      '기자',
      '음악/음향',
      '광고 제작/카피',
      '무대/스탭/오퍼레이터',
      '연예/엔터테인먼트',
      '인쇄/출판/편집',
    ],
    서비스: ['승무원/숙박/여행', '음식 서비스'],
    건설: [
      '현장/시공/감리/공무',
      '안전/품질/관리',
      '토목/조경/도시',
      '건축/인테리어/설계',
      '환경/플랜트',
    ],
  };
  const skillBigList = [
    '공통기본 역량',
    '대인관계 역량',
    '성과관리 역량',
    '사업수행 역량',
    '자기기반 역량',
  ];
  const skillSmallList = {
    '공통기본 역량': [
      '회사/비즈니스 이해',
      '가치관/직업관',
      '조직 몰입/적응력',
      '기본자질 및 교양',
      '직무지식/구용능력',
    ],
    '대인관계 역량': [
      '팀워크 지향',
      '프리젠테이션 스킬',
      '리더십',
      '협상/설득력',
      '의사소통',
      '대인관계',
    ],
    '성과관리 역량': [
      '목표/성취지향',
      '정보수집/활용력',
      'IT 활용 능력',
      '문제해결',
      '의사결정',
      '계획/ 조직화',
    ],
    '사업수행 역량': [
      '상황대처',
      '국제 감각/어학능력',
      '고객지향',
      '전략적 사고',
    ],
    '자기기반 역량': [
      '도전 정신',
      '유연/창의력',
      '진취성',
      '분석력',
      '자기개발',
      '신의/성실성',
    ],
  };
  const isReadOnly = match.path === '/mypage/profile' ? true : false;
  const [jobB, setJobB] = useState(jobBigList[0]);
  const [jobS, setJobS] = useState(jobSmallList[jobBigList[0]][0]);
  const [skillB, setSkillB] = useState(skillBigList[0]);
  const [skillS, setSkillS] = useState(skillSmallList[skillBigList[0]][0]);

  const handleJobBigChange = value => {
    setJobB(value);
    setJobS(jobSmallList[value][0]);
  };
  const handleSkillBigChange = value => {
    setSkillB(value);
    setSkillS(skillSmallList[value][0]);
  };
  const onJobSmallChange = value => {
    setJobS(value);
  };
  const onSkillSmallChange = value => {
    setSkillS(value);
  };

  return (
    <InterestInfoWrap>
      <div className="sector">
        <div className="title">관심 분야</div>
        <div className="classify__big">
          <span>대분류</span>
          {isReadOnly ? (
            <input
              type="text"
              value={jobBig}
              placeholder="선택해주세요"
              readOnly={isReadOnly}
            ></input>
          ) : (
            <Select
              defaultValue={jobBig}
              value={jobB}
              style={{ width: '240px' }}
              size="small"
              onChange={handleJobBigChange}
              suffixIcon={<img src={''} alt="" />}
            >
              {jobBigList.map(job => (
                <Option key={job}>{job}</Option>
              ))}
            </Select>
          )}
        </div>
        <div className="classify__small">
          <span>소분류</span>
          {isReadOnly ? (
            <input
              type="text"
              value={jobSmall}
              placeholder="선택해주세요"
              readOnly={isReadOnly}
            ></input>
          ) : (
            <Select
              defaultValue={jobSmall}
              value={jobS}
              style={{ width: '240px' }}
              size="small"
              onChange={onJobSmallChange}
              suffixIcon={<img src={''} alt="" />}
            >
              {jobSmallList[jobB].map(job => (
                <Option key={job}>{job}</Option>
              ))}
            </Select>
          )}
        </div>
      </div>
      <div className="skill">
        <div className="title">관심 역량</div>
        <div className="classify__big">
          <span>대분류</span>
          {isReadOnly ? (
            <input
              type="text"
              value={skillBig}
              placeholder="선택해주세요"
              readOnly={isReadOnly}
            ></input>
          ) : (
            <Select
              defaultValue={skillBig}
              value={skillB}
              style={{ width: '240px' }}
              size="small"
              onChange={handleSkillBigChange}
              suffixIcon={<img src={''} alt="" />}
            >
              {skillBigList.map(skill => (
                <Option key={skill}>{skill}</Option>
              ))}
            </Select>
          )}
        </div>
        <div className="classify__small">
          <span>소분류</span>
          {isReadOnly ? (
            <input
              type="text"
              value={skillSmall}
              placeholder="선택해주세요"
              readOnly={isReadOnly}
            ></input>
          ) : (
            <Select
              defaultValue={skillSmall}
              value={skillS}
              style={{ width: '240px' }}
              size="small"
              onChange={onSkillSmallChange}
              suffixIcon={<img src={''} alt="" />}
            >
              {skillSmallList[skillB].map(skill => (
                <Option key={skill}>{skill}</Option>
              ))}
            </Select>
          )}
        </div>
      </div>
    </InterestInfoWrap>
  );
};

export default withRouter(InterestInfo);
