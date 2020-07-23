import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Editor from './Editor';

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/editor" component={Editor} />
    </Switch>
  </div>
);

export default App;
