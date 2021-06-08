import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`

`;

const SubTitle = Styled.div`
    font-weight: bold;
`;

const MaterialBox = Styled.div`
    .i{
      margin-left: 1em;
    }
    .ii{
      margin-left: 2em;
    }
    .iii{
      margin-left: 3em;
    }
    .ti{
      margin-left: 24px;
    }
    .tii{
      margin-left: 52px;
    }
    .tti{
      margin-left: 38px;
    }
`;

const Privacy = () => {
  return (
    <Container>
      <SubTitle>개인정보 수집 및 이용</SubTitle>
      <br />
      sqoop (이하 '회사')은 당사에서 운영하는 sqoop 사이트 (https://sqoop.co.kr
      이하 '사이트')를 이용하는 회원(사용자)들에게 양질의 서비스를 제공하고자
      아래와 같은 개인정보를 수집하고 있습니다. 이용자가 제공한 모든 정보는 하기
      목적에 필요한 용도 이외로는 사용되지 않으며 이용 목적이 변경될 시에는 사전
      동의를 구할 것입니다.
      <br />
      <br />
      <MaterialBox>
        1. 개인정보 수집에 대한 동의
        <div className="i">
          - 회사는 이용자들이 회사의 개인정보 취급방침 또는 이용약관의 내용에
          대하여 「동의」버튼을 클릭할 수 있는
        </div>
        <div className="ti">
          절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집에 대해 동의한
          것으로 봅니다.
        </div>
        <div className="i"></div>
        <br />
        2. 수집 및 이용목적
        <div className="i">
          - 회원관리, 가입의사 확인, 가입 및 가입횟수 제한
        </div>
        <div className="i">
          - 회원제 서비스이용에 따른 회원(사용자) 인증 및 양질의 서비스 제공을
          위한 고객문의 응답, 새로운 정보소
        </div>
        <div className="ti">개 및 고지사항 전달</div>
        <div className="i">
          - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
        </div>
        <div className="i">
          - 본인인증, 컨텐츠 제공을 위한 개인식별, 구매 및 요금 결제, 물품 및
          증빙발송, 부정 이용방지와 비인가 사
        </div>
        <div className="ti">용 방지</div>
        <br />
        3. 수집항목
        <br />
        <div className="i">1. 회원가입시 수집하는 항목</div>
        <div className="ii">개인회원</div>
        <div className="iii">
          {' '}
          -필수 : 성명, 아이디, 비밀번호, 이메일 주소, 휴대전화번호, 생년월일
        </div>
        <div className="ii">
          2. 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로
          생성되어 수집될 수 있습니다.
        </div>
        <div className="iii">
          - IP Address, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록
        </div>
        <div className="ii"> 3. 허위 정보 입력 시 회사의 조치 </div>
        <div className="iii">
          - 고객은 자신의 정보에 대해 정확성 및 적법성을 보장해야 합니다. 만약
          이를 위반하여 타인의 정보를
        </div>
        <div className="tii">
          도용 하는 등 각종 방법으로 허위 정보를 입력할 경우 회사는 해당 고객을
          관계법령에 따라 신고할 수 있으며 강제 탈퇴를 시킬 수도 있습니다.
        </div>
        <div className="tii"></div>
        4. 개인정보 수집방법
        <br />
        <p className="i">
          - 홈페이지, 서비스 이용, 이벤트 응모, 팩스, 우편, 전화, 고객센터
          문의하기
        </p>
        5. 개인정보의 보유 및 이용기간
        <div className="i">
          - "회사"는 회원가입일로부터 서비스를 제공하는 기간 동안에 한하여
          이용자의 개인정보를 보유 및 이용하게
        </div>
        <div className="ti">
          됩니다. 회원탈퇴를 요청하거나 개인정보의 수집 및 이용에 대한 동의를
          철회하는 경우, 수집 및 이용목적이 달성되거나 이용기간이 종료한 경우
          개인정보를 지체 없이 파기합니다.단, 다음의 경우에 대해서는 각각 명시한
          이유와 기간 동안 보존합니다.
        </div>
        <div className="i">
          - 상법 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 법령에서
          규정한 보존기간 동안 거래내역과 최
        </div>{' '}
        <div className="ti">
          소한의 기본정보를 보유합니다. 이 경우 회사는 보관하는 정보를 그 보관의
          목적으로만 이용합니다.
        </div>
        <div className="ii">- 계약 또는 청약철회 등에 관한88 기록: 5년</div>
        <div className="ii">- 대금결제 및 재화 등의 공급에 관한 기록: 5년</div>
        <div className="ii">- 소비자의 불만 또는 분쟁처리에 관한 기록: 3년</div>
        <div className="ii">- 부정이용 등에 관한 기록: 5년</div>
        <div className="ii">
          - 웹사이트 방문기록(로그인 기록, 접속기록): 3개월
        </div>
        <br />
        6. 개인정보 파기절차 및 파기방법
        <div className="i">
          - 이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이
          달성되면 지체 없이 파기합니다. "회
        </div>
        <div className="ti">
          사"의 개인정보 파기절차 및 방법은 다음과 같습니다.
        </div>
        <div className="i">- 파기절차</div>
        <div className="ii">
          - 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의
          DB로 옮겨져 (종이의 경우 별도의
        </div>
        <div className="tti">
          서류함) 내부 방침 및 기타 관련법령에 의해 정보보호 사유에 따라 일정
          기간 저장된 후 파기됩니다.별도 DB로 옮겨진 개인정보는 법률에 의한
          경우가 아니고서는 다른목적으로 이용되지 않습니다.
        </div>
        <div className="i"> -파기방법</div>
        <div className="ii">
          {' '}
          - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통해 파기합니다.
        </div>
        <div className="ii">
          {' '}
          전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
          방법을 사용하여 삭제합니다.
        </div>
        <br />
        7. 개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항
        <div className="i">- 쿠키란</div>
        <div className="ii">
          {' '}
          웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 작은
          텍스트 파일로 이용자의 하 드디스크에 저장됩니다.
        </div>
        <div className="i">- 쿠키의 사용 목적</div>
        <div className="ii">
          {' '}
          "사이트"가 쿠키를 통해 수집하는 정보는 '2. 수집하는 개인정보 항목 및
          수집방법'과 같으며 '1. 개인정 보의 수집 및 이용목적'외의 용도로는
          이용되지 않습니다.
        </div>
        <div className="i">- 쿠키 설치, 운영 및 거부 </div>
        <div className="ii">
          - 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹브라우저에서
          옵션을 설정함으로써 모든 쿠키 를 허용하거나, 쿠키가 저장될 때마다
          확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
        </div>
        <div className="ii">
          - 쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)은
          다음과 같습니다. 예)웹 브라우저 상단의 도구 - 인터넷 옵션 - 개인정보
        </div>
        <div className="ii">
          - 단, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 일부 서비스 이용에
          어려움이 있을 수 있습니다.
        </div>
        <br />
        8. 개인정보의 기술적, 관리적 보호대책
        <div className="i">- 개인정보 암호화</div>
        <div className="ii">
          - 이용자의 개인정보는 비밀번호에 의해 보호되며, 파일 및 각종 데이터는
          암호화하거나 파일 잠금 기능을 통해 별도의 보안기능을 통해 보호하고
          있습니다.
        </div>
        <div className="i">- 개인정보 처리 직원의 교육</div>
        <div className="ii">
          - 개인정보관련 처리 직원은 최소한의 인원으로 구성되며, 새로운 보안기술
          습득 및 개인정보보호 의무에 관해 정기적인 교육을 실시하며 내부 감사
          절차를 통해 보안이 유지되도록 시행하고 있습니다.
        </div>
        <div className="i">- 개인 아이디와 비밀번호 관리</div>
        <div className="ii">
          - "회사"는 이용자의 개인정보를 보호하기 위하여 최선의 노력을 다하고
          있습니다. 단, 이용자의 개인적인 부주의로 ID, 비밀번호등 개인정보가
          유출되어 발생한 문제와 기본적인 인터넷의 위험성 때문에 일어나 는
          일들에 대해 책임을 지지 않습니다.
        </div>
        <br />
        9. 이용자의 권리와 그 행사방법
        <div className="i">
          - 이용자 및 법정대리인은 언제든지 등록되어 자신의 정보를 열람, 수정,
          삭제할 수 있습니다.
        </div>
        <div className="i">
          - 이용자 및 법정대리인은 개인정보 조회/수정을 위해서는
          '회원정보관리'를 통하여 가능하며, 가입해지(동의 철회)를 위해서는
          '회원탈퇴'를 클릭하여 본인 확인 절차를 거친 후 직접 열람, 정정 또는
          탈퇴가 가능합니다.
        </div>
        <div className="i">
          -또는 개인정보 보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체
          없이 조치하겠습니다.
        </div>
        <div className="i">
          {' '}
          이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
          완료하기 전까지 당해 개인정보를 이 용 또는 제공하지 않습니다.
        </div>
        <div className="i">
          -또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
          제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
        </div>
        <div className="i">
          {' '}
          - "회사"는 이용자 요청에 의해 해지 또는 삭제된 개인정보는 '5.
          개인정보의 보유 및 이용기간'에 명시된 바에 따라 처리하고 그 외의
          용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
        </div>
        <br />
        10. 개인정보 보호책임자 및 민원서비스
        <div className="i">
          - "회사"는 이용자의 개인정보를 보호하고 개인정보와 관련한 고충처리를
          위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.
        </div>
        <br /> <br /> 개인정보 보호책임
        <br />
        이름: 최혜원, 소속/직위: sqoop/ 대표, e-메일 : sqoop.official@gmail.com
        <br />- 기타 개인정보에 관한 상담이 필요한 경우에는 아래 기관에 문의하실
        수 있습니다.
        <br />
        <div className="ii"></div>
        <div className="ii">
          - KISA 개인정보침해신고센터 전화:118 / https://privacy.kisa.or.kr
        </div>
        <div className="ii">
          - 대검찰청 사이버수사과 전화:1301 / https://www.spo.go.kr
        </div>
        <div className="ii">
          - 경찰청 사이버안전국 전화:182 / https://cyberbureau.police.go.kr
        </div>
      </MaterialBox>
    </Container>
  );
};

export default Privacy;
