 
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home';
import Cart from './pages/Cart';

import Navbar from './components/Navbar'


const App = () => {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route exact path="/cart">
          <Cart/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;