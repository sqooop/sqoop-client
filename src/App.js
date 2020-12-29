import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/signin" component={SignIn} />
      </HashRouter>
    </div>
  );
}

export default App;
