import logo from '../../assets/images/Ic_sqoop.svg';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setModalActive } from '../../store/modules/currentCard';
import SaveModal from '../stepCard/SaveModal';

const HeaderBlock = styled.div`
  display: flex;
  padding: 8px 90px;
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
  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));
  const currentCard = useSelector(state => state.currentCard);
  const { notSaved, modalActive } = currentCard;

  return (
    <>
      <HeaderBlock>
        <img
          src={logo}
          alt="logo"
          style={{}}
          onClick={() => {
            if (notSaved) {
              saveModalActive(true);
            } else {
              history.push('/');
            }
          }}
        />
        <Wrapper>
          <li
            onClick={() => {
              history.push('/signup');
            }}
          >
            회원가입
          </li>
          <li
            onClick={() => {
              history.push('/signin');
            }}
          >
            로그인
          </li>
        </Wrapper>
      </HeaderBlock>
      <Spacer />

      {modalActive && <SaveModal setModalActive={saveModalActive} />}
    </>
  );
};

export default withRouter(MainHeader);
