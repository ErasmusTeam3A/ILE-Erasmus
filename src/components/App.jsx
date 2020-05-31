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
import Select from '../pages/Select';
import Recent from '../pages/recent';
import Model from './organisms/Model';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/interactive" component={Interactive} />
          <Route exact path="/select" component={Select} />
          <Route exact path="/recent" component={Recent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
