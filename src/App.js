import React from 'react';
import { Route } from 'react-router-dom';
import SignIn from './pages/signin/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/signin" component={SignIn} />
      </header>
    </div>
  );
}

export default App;
