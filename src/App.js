import { useState } from 'react';
import './App.css';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}>
          </Route> */}
            <TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* </Route>
          </Routes> */}
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
