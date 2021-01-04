import logo from '../../assets/images/ic_sqoop.svg';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  display: flex;
  margin: 0vh 11.1vh;
  padding: 1.1vh 0vh;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .list {
    list-style: none;
    padding: 2.2vh 1.4vh;
    font-weight: 400;
    &:hover {
      font-weight: 700;
    }
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;

const MainHeader = () => {
  return (
    <>
      <HeaderBlock>
        <img src={logo} alt="logo" style={{}} />
        <Wrapper>
          <li className="list">홈</li>
          <li className="list">모아보기</li>
          <li className="list">마이페이지</li>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default MainHeader;
