import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {SearchPage} from './index';

class App extends Component {
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
