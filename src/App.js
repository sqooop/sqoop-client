import { HashRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';
import StepCard from './pages/stepCard/StepCard';
import SignIn from './pages/signin/SignIn';
import ActivityOne from './pages/activityOne/ActivityOne';
import Home from './pages/home/Home';
import PostList from './pages/home/PostList';
import MainHeader from './components/common/MainHeader';
import CreateActivity from './pages/createActivity/CreateActivity';

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
          <Route exact path="/:id" component={PostList} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/steps/:id" component={StepCard} />
          <Route path="/detail/edit/:id" component={ActivityOne} />
          <Route exact path="/create" component={CreateActivity} />
        </FontWrap>
      </HashRouter>
    </div>
  );
}

export default App;
