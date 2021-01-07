import { BrowserRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import CreateActivity from './pages/createActivity/CreateActivity';
import StepCard from './pages/stepCard/StepCard';
import ActivityOneDefault from './pages/activityOne/ActivityOneDefault';
import ActivityOneEdit from './pages/activityOne/ActivityOneEdit';
import MainHeader from './components/common/MainHeader';
import './App.css';

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
      <BrowserRouter>
        <FontWrap>
          <Route component={MainHeader} />
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/create" component={CreateActivity} />
          <Route exact path="/steps/:id" component={StepCard} />
          <Route exact path="/detail/:id" component={ActivityOneDefault} />
          <Route exact path="/detail/edit/:id" component={ActivityOneEdit} />
        </FontWrap>
      </BrowserRouter>
    </div>
  );
}

export default App;
