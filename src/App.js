import './App.css';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms';
import About from './components/About';
import Alert from './components/Alert';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (type, head, message) => {
    setAlert({
      type: type,
      head: head,
      body: message
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";

      showAlert("success", "Mode Changed", "Dark mode has been enabled")

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      showAlert("success", "Mode Changed", "Light mode has been enabled")
    }
  }

  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />



    <div className="container my-3">
      <Router>
        <Routes>
          <Route path='/' element = {<TextForms heading="Text analyser" mode={mode} alert={showAlert} />}/>
      
        </Routes>

      </Router> 



      {/* <About toggleMode={toggleMode} /> */}

    </div>
    </>
  );
}

export default App;
