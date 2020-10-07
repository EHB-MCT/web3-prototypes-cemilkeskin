import React from 'react';
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import './App.css'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 
function App() { 

  

  return (

    <div className="container-box">

  
      <Router>
        <Navbar />
        <Todo /> 
          {/* <Switch>
              <Route path='/' />
          </Switch> */}
      </Router>
   </div>

  );
}

export default App;
