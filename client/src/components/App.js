import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {SearchPage} from './index';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <h1>New York Times Search</h1>
          <h3>find, save &amp; annotate articles</h3>
          <Switch>
            <Route path='/search' component={SearchPage} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
