import React from 'react';
import './../sass/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import Start from '../pages/Start';
import Interactive from '../pages/Interactive';
// import Model from './organisms/Model'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/model" component={Interactive} />
        </Switch>
      </Router>
    );
  }
}

export default App;
