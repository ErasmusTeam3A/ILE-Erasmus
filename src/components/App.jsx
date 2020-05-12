import React from 'react';
import './../sass/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import Start from '../pages/Start';
import ModelView from '../pages/ModelView';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route exact path="/" component={Start} />
                  <Route exact path="/modelview" component={ModelView}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
