import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ScreenOne from './components/screenOne'
import ScreenTwo from './components/screenTwo'
import ScreenThree from './components/screenThree'

const App= (
   <Router>
    <div>
      <Route exact path="/" component={ScreenOne} />
      <Route path="/screenTwo" component={ScreenTwo}/>
      <Route path="/screenThree" component={ScreenThree}/>
    </div>
  </Router>

)
ReactDOM.render(App , document.getElementById('root'));
