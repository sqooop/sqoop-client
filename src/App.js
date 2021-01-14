import { BrowserRouter, Route } from 'react-router-dom';
import MainHeader from './components/common/MainHeader';
import Home from './pages/home/home';
import SignIn from './pages/signIn/SignIn';
import CreateActivity from './pages/createActivity/CreateActivity';
import StepCard from './pages/stepCard/StepCard';
import FilterActivities from './pages/filterActivities/FilterActivities';
import ActivityOneDefault from './pages/activityOne/ActivityOneDefault';
import ActivityOneEdit from './pages/activityOne/ActivityOneEdit';
import MyPage from './pages/myPage/MyPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={MainHeader} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/create" component={CreateActivity} />
        <Route exact path="/steps/:id" component={StepCard} />
        <Route exact path="/activities" component={FilterActivities} />
        <Route exact path="/detail/:id" component={ActivityOneDefault} />
        <Route exact path="/detail/edit/:id" component={ActivityOneEdit} />
        <Route exact path="/mypage/basic" component={MyPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
