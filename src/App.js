import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import ActivityOne from './pages/ActivityOne/ActivityOne';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/one_activity" component={ActivityOne} />
      </HashRouter>
    </div>
  );
}

export default App;
