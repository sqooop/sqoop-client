import { HashRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';
import StepCard from './pages/StepCard/StepCard';
import SignIn from './pages/signIn/signin';
import Home from './pages/home/Home';
import MainHeader from './components/common/MainHeader';

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
          <Route component={MainHeader} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/steps/:id" component={StepCard} />
          <Route exact path="/" component={Home} />
        </FontWrap>
      </HashRouter>
    </div>
  );
}

export default App;
