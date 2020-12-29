import logo from '../../assets/images/ic_sqoop.svg';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  margin-left: 90px;
  margin-right: 90px;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  display: flex;
  margin: 16px 0px;
`;

const ListHome = styled.li`
  display: flex;
  list-style: none;
  padding: 8px 0px;
  font-weight: 400;
  &:hover {
    font-weight: 700;
  }
`;
const ListCollect = styled.li`
  display: flex;
  list-style: none;
  padding: 8px 20px;
  font-weight: 400;
  &:hover {
    font-weight: 700;
  }
`;
const ListMypage = styled.li`
  display: flex;
  list-style: none;
  padding: 8px 0px;
  font-weight: 400;
  &:hover {
    font-weight: 700;
  }
`;

const MainHeader = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" style={{}} />
      <MenuBox>
        <ListHome>
          <li>홈</li>
        </ListHome>
        <ListCollect>
          <li>모아보기</li>
        </ListCollect>
        <ListMypage>
          <li>마이페이지</li>
        </ListMypage>
      </MenuBox>
    </HeaderContainer>
  );
};

export default MainHeader;
