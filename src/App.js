import { HashRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';
import StepCard from './pages/StepCard/StepCard';
import SignIn from './pages/SignIn/SignIn';

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
    <div className="App">
      <HashRouter>
        <FontWrap>
          <Route exact path="/signin" component={SignIn} />
          <Route path="/steps/:id" component={StepCard} />
        </FontWrap>
      </HashRouter>
    </div>
  );
}

export default App;
