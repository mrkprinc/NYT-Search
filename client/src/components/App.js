import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {SearchPage, SavedPage} from './index';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>New York Times Search</h1>
            <h3>find, save &amp; annotate articles</h3>
            <nav>
              <Link to='/'>Article Search</Link>
              <Link to='/saved'>Saved Articles</Link>
            </nav>
          </header>
        
          <Switch>
            <Route path='/saved' component={SavedPage} />
            <Route path='/' component={SearchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
