import './App.css';
import DarkMod from './componentts/DarkMod';
import Nevprops from './componentts/props';
import React, { useState } from 'react'
import Form from './componentts/Form';
import Alert from './componentts/Alert';
import UseState from './componentts/useState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[messAlert,setmessAlert] = useState(null)
  const[Mode,setMode] = useState("light")

  const MessShow = (message , type) => {
    setmessAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setmessAlert(null);
    },2000)
  }

  const DarkMode = () => {
      if(Mode === 'light')
      {
        setMode('dark')
        document.body.style.background = ' #00284d';
        MessShow("Dark Mode Enable" , "success");
      }
      else
      {
        setMode('light')
        document.body.style.background = 'white';
        MessShow("light Mode Enable" , "success")
      }
  }
  return (
    <>  
        {/* <Nevprops title="softstorm" Link="about" mode={Mode} darkmode={DarkMode}/>
        <Form />
        <Alert alert={messAlert} />
        <UseState MessShow={MessShow} heading="hey enter the text" />  
        <DarkMod name="about" />   */}
      <Router>
        <Nevprops title="softstorm" Link="about" mode={Mode} darkmode={DarkMode}/>
        
        <Alert alert={messAlert} />
        <Switch>
          <Route exact path="/">
            <Form />    
          </Route>
          <Route path="/usestate">
            <UseState MessShow={MessShow} heading="hey enter the text" />        
          </Route>
          <Route path="/mod">
            <DarkMod name="about" /> 
          </Route> 
        </Switch>
      </Router> 
    </>                
  );
}

export default App;
