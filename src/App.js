import { HashRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';
import StepCard from './pages/stepCard/StepCard';
import SignIn from './pages/signin/SignIn';
import ActivityOne from './pages/ActivityOne/ActivityOne';
import Home from './pages/home/home';
import MainHeader from './components/common/MainHeader';
import CreateActivity from './containers/createActivity/CreateActivity';

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
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/steps/:id" component={StepCard} />
          <Route path="/activity_detail/:id" component={ActivityOne} />
          <Route exact path="/createActivity" component={CreateActivity} />
        </FontWrap>
      </HashRouter>
    </div>
  );
}

export default App;
