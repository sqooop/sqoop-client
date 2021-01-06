import { BrowserRouter, Route } from 'react-router-dom';
import StepCard from './pages/stepCard/StepCard';
import SignIn from './pages/signIn/SignIn';
import ActivityOne from './pages/activityOne/ActivityOne';
import Home from './pages/home/Home';
import MainHeader from './components/common/MainHeader';
import CreateActivity from './pages/createActivity/CreateActivity';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={MainHeader} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/steps/:id" component={StepCard} />
        <Route exact path="/detail/edit/:id" component={ActivityOne} />
        <Route exact path="/create" component={CreateActivity} />
      </BrowserRouter>
    </div>
  );
}

export default App;
