import { BrowserRouter, Route } from 'react-router-dom';
//import MainHeader from './components/common/MainHeader';
import Home from './pages/home/home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signUp/SignUp';
import CreateActivity from './pages/createActivity/CreateActivity';
import StepCard from './pages/stepCard/StepCard';
import FilterActivities from './pages/filterActivities/FilterActivities';
import ActivityOneDefault from './pages/activityOne/ActivityOneDefault';
import ActivityOneEdit from './pages/activityOne/ActivityOneEdit';
import MyPage from './pages/myPage/MyPage';
import Settings from './pages/myPage/Settings';
import Email from './pages/findInformation/Email';
import Password from './pages/findInformation/Password';
import Delete from './pages/myPage/delete/Delete';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={CreateActivity} />
        <Route exact path="/steps/:id" component={StepCard} />
        <Route exact path="/activities" component={FilterActivities} />
        <Route exact path="/detail/:id" component={ActivityOneDefault} />
        <Route exact path="/detail/edit/:id" component={ActivityOneEdit} />
        <Route exact path="/mypage/profile" component={MyPage} />
        <Route exact path="/mypage/profile/edit" component={MyPage} />
        <Route exact path="/mypage/settings" component={Settings} />
        <Route exact path="/mypage/settings/delete" component={Delete} />
        <Route exact path="/email" component={Email} />
        <Route exact path="/password" component={Password} />
      </BrowserRouter>
    </div>
  );
}

export default App;
