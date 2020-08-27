import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Route404 from "./components/Route404/Route404";
import {Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Navigation />
      <Switch>
      
      
      <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Welcome,Rosemarie" />}

        />
        <Route
        path="/welcome/:name"
        render={(props) => <Welcome {...props} name= {props.match.params.name }/>}
        />
        <Route path="/clock" component= {Clock} />

        
        
        <Route path="/contact" component={Contact} />
   
        <Route path="/Route404"   component={Route404} />
        

      <welcome name="Welcome,Rosemarie"/>
      <clock/>
      <contact/>


      </Switch>

    </div>
  );
}

export default App;
