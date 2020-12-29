// import CreateActivity from './pages/createActivity/createActivity';
import StepCard from './pages/stepCard/StepCard';
import { BrowserRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';

const FontWrap = Styled.div`
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: normal;
    src: url('./font/NotoSansKR-Regular.otf') format('otf');
  }
  @font-face {
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: bold;
    src: url('./font/NotoSansKR-Bold.otf') format('otf');
  }
  * {
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: normal;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <FontWrap>
        <Route path="/steps/:id" component={StepCard} />
      </FontWrap>
    </BrowserRouter>
  );
}

export default App;
