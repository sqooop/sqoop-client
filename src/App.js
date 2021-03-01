import { BrowserRouter, Route } from 'react-router-dom';
//import MainHeader from './components/common/MainHeader';
import Home from './pages/home/home';
import SignIn from './pages/signin/SignIn';
<<<<<<< HEAD
import SignUp from './pages/signUp/SignUp';
=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
import CreateActivity from './pages/createActivity/CreateActivity';
import StepCard from './pages/stepCard/StepCard';
import FilterActivities from './pages/filterActivities/FilterActivities';
import ActivityOneDefault from './pages/activityOne/ActivityOneDefault';
import ActivityOneEdit from './pages/activityOne/ActivityOneEdit';
import MyPage from './pages/myPage/MyPage';
<<<<<<< HEAD
import Settings from './pages/myPage/Settings';
=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={SignIn} />
<<<<<<< HEAD
        <Route exact path="/signup" component={SignUp} />
=======
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={CreateActivity} />
        <Route exact path="/steps/:id" component={StepCard} />
        <Route exact path="/activities" component={FilterActivities} />
        <Route exact path="/detail/:id" component={ActivityOneDefault} />
        <Route exact path="/detail/edit/:id" component={ActivityOneEdit} />
<<<<<<< HEAD
        <Route exact path="/mypage/profile" component={MyPage} />
        <Route exact path="/mypage/settings" component={Settings} />
=======
        <Route exact path="/mypage/basic" component={MyPage} />
>>>>>>> c701b541a4661ae58261808483f8b9182a287066
      </BrowserRouter>
    </div>
  );
}

export default App;
