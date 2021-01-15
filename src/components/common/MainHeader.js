import logo from '../../assets/images/Ic_sqoop.svg';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const HeaderBlock = styled.div`
  display: flex;
  margin: 0px 80px;
  padding: 8px 0px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  li {
    list-style: none;
    padding: 16px 10px;
    font-weight: 400;
    &:hover {
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;

const MainHeader = ({ history }) => {
  return (
    <>
      <HeaderBlock>
        <img src={logo} alt="logo" style={{}} />
        <Wrapper>
          <li
            className="home"
            onClick={() => {
              history.push('/home');
            }}
          >
            홈
          </li>
          <li
            className="activities"
            onClick={() => {
              history.push('/activities');
            }}
          >
            모아보기
          </li>
          <li
            className="mypage"
            onClick={() => {
              history.push('/mypage/basic');
            }}
          >
            마이페이지
          </li>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default withRouter(MainHeader);
