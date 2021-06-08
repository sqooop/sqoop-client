import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signUp/SignUp';
import Notice from './pages/signUp/Notice';
import Privacy from './pages/signUp/Privacy';
import Email from './pages/findInformation/Email';
import Password from './pages/findInformation/Password';
import CreateActivity from './pages/createActivity/CreateActivity';
import StepCard from './pages/stepCard/StepCard';
import FilterActivities from './pages/filterActivities/FilterActivities';
import ActivityOneDefault from './pages/activityOne/ActivityOneDefault';
import ActivityOneEdit from './pages/activityOne/ActivityOneEdit';
import MyPage from './pages/myPage/MyPage';
import Settings from './pages/myPage/Settings';
import Delete from './pages/myPage/delete/Delete';
import './App.css';

function App() {
  const token = sessionStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
        {token === null ? (
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signup/notice/2" component={Notice} />
            <Route exact path="/signup/notice/1" component={Privacy} />
            <Route exact path="/email" component={Email} />
            <Route exact path="/password" component={Password} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={CreateActivity} />
            <Route exact path="/steps/:id" component={StepCard} />
            <Route exact path="/activities" component={FilterActivities} />
            <Route exact path="/detail/:id" component={ActivityOneDefault} />
            <Route exact path="/detail/edit/:id" component={ActivityOneEdit} />
            <Route exact path="/mypage/profile" component={MyPage} />
            <Route exact path="/mypage/profile/edit" component={MyPage} />
            <Route exact path="/mypage/settings" component={Settings} />
            <Route exact path="/mypage/settings/delete" component={Delete} />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
