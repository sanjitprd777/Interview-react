import React from 'react'
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import './App.css'
import Navbar from "./Navbar"
import Bottombar from "./Bottombar"
import Home from "./Home";
import Interviews from "./Interviews";
import Show from "./Show";
import New from "./New";
import EditEvent from "./EditEvent";
import DeleteEvent from "./DeleteEvent";
import Error404 from "./Error404"

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
          <Route path="/interviews/:id/edit" exact component={EditEvent} />
          <Route path="/interviews/:id/delete" exact component={DeleteEvent} />
          <Route component={Error404} />
        </Switch>
      </div>
      </Router>
    );
}

export default App;
