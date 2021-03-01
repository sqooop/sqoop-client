import logo from '../../assets/images/Ic_sqoop.svg';
import styled from 'styled-components';
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setActivities } from '../../store/modules/activities';
import { setModalActive } from '../../store/modules/currentCard';
import { getActivities } from '../../lib/api/activity';
import SaveModal from '../stepCard/SaveModal';
=======
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setActivities } from '../../store/modules/activities';
import { getActivities } from '../../lib/api/activity';
>>>>>>> c701b541a4661ae58261808483f8b9182a287066

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
  const dispatch = useDispatch();
  const saveActivities = data => dispatch(setActivities(data));
<<<<<<< HEAD
  const saveModalActive = data => dispatch(setModalActive(data));
  const currentCard = useSelector(state => state.currentCard);
  const { notSaved, modalActive } = currentCard;

=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
  return (
    <>
      <HeaderBlock>
        <img src={logo} alt="logo" style={{}} />
        <Wrapper>
          <li
            className="home"
            onClick={() => {
<<<<<<< HEAD
              if (notSaved) {
                saveModalActive(true);
              } else {
                history.push('/home');
              }
=======
              history.push('/home');
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
            }}
          >
            홈
          </li>
          <li
            className="activities"
            onClick={() => {
<<<<<<< HEAD
              if (notSaved) {
                saveModalActive(true);
              } else {
                history.push('/activities');
              }
=======
              history.push('/activities');
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
            }}
          >
            모아보기
          </li>
          <li
            className="mypage"
            onClick={() => {
<<<<<<< HEAD
              if (notSaved) {
                saveModalActive(true);
              } else {
                history.push('/mypage/profile');
              }
=======
              history.push('/mypage/basic');
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
            }}
          >
            마이페이지
          </li>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
<<<<<<< HEAD
      {modalActive && <SaveModal setModalActive={saveModalActive} />}
=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
    </>
  );
};

export default withRouter(MainHeader);
