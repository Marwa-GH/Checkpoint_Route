import React from 'react'
import './App.css'
import Home from './Components/Home';
import  TrailerMovie from './Components/TrailerMovie';
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  

  return (
    
     
     <BrowserRouter>
  <Switch>
    <div>
          <Route exact path="/"  component={ Home} />
          <Route path="/Trailer/:id" component={TrailerMovie} />

    </div>
        </Switch>
        </BrowserRouter>
      
  );
}

export default App;