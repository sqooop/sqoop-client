import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';
const AccountEmail = Styled.div`
    display: flex;`;
const AccountNumber = Styled.div``;
const AccountInfo = Styled.div``;
const AccountConfirm = () => {
    return (
    <>
        <AccountEmail>sqoop_hwaiting@naver.com</AccountEmail>
        <AccountNumber>010-0000-0000</AccountNumber>
     <AccountInfo>sqoop 서비스 로그인을 위한 정보이기 때문에 변경할 수 없어요.<br />
            이력서를 위한 이메일과 전화번호는 상단의 프로필 탭에서 변경해주세요.</AccountInfo>
    </>
    )
}

export default AccountConfirm;