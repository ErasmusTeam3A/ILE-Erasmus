import React from 'react';
import './../sass/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

// Components
import Start from '../pages/Start';
import Interactive from '../pages/Interactive';
import Model from './organisms/Model';

const history = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <Router  history={history}>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/interactive" component={Interactive} />
        </Switch>
      </Router>
    );
  }
}

export default App;
