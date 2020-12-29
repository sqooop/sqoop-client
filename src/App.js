import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import MainHeader from './components/common/MainHeader';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeader} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*">
            <h1> 404 NOT FOUND </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
