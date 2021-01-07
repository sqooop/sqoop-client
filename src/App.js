import { BrowserRouter, Route } from 'react-router-dom';
import Styled from 'styled-components';
import MainHeader from './components/common/MainHeader';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import CreateActivity from './pages/createActivity/CreateActivity';
import StepCard from './pages/stepCard/StepCard';
import Card from './components/filterActivities/Card';
import ActivityOneDefault from './pages/activityOne/ActivityOneDefault';
import ActivityOneEdit from './pages/activityOne/ActivityOneEdit';
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
          <Route exact path="/activities" component={Card} />
          <Route exact path="/detail/:id" component={ActivityOneDefault} />
          <Route exact path="/detail/edit/:id" component={ActivityOneEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
