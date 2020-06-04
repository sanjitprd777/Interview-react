import React from 'react'
import { HashRouter as Router, Switch, Route } from  'react-router-dom';
import './App.css'
import Navbar from "./Navbar"
import Bottombar from "./Bottombar"
import Home from "./Home";
import Interviews from "./Interviews";
import Show from "./Show";
import New from "./New";
import Edit from "./Edit";
import Delete from "./Delete";

function App() {
    return (
      <Router>
        <Navbar/>
        <Bottombar/>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/interviews" exact component={Interviews} />
          <Route path="/interviews/new" exact component={New} />
          <Route path="/interviews/:id" exact component={Show} />
          <Route path="/interviews/:id/edit" exact component={Edit} />
          <Route path="/interviews/:id/delete" exact component={Delete} />
        </Switch>
      </div>
      </Router>
    );
}

export default App;
