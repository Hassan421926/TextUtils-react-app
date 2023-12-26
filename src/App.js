import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
      const [mode, setMode] = useState('light');
      const [alert, setAlert] = useState(null);
     

      const showAlert = (message , type) => {
       setAlert(
       {
        msg: message,
        type: type
       }
       );

       setTimeout(() => {
        setAlert(null);
       }, 2000);
      }

      const toggleMode = () => {
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = "#04464c";
          showAlert('Dark mode has been enabled','success');
          // document.title = 'TextUtils - Dark Mode';
          
         
         
          
        }else if(mode === 'dark'){
          setMode('light');
          document.body.style.backgroundColor = "white";
          showAlert('Light mode has been enabled','success');
          // document.title = 'TextUtils - Light Mode';
          
        }
      }


  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}> </Navbar>
    <Alert alert={alert} />
    <Textform showAlert={showAlert} mode={mode}/>
    
   
    {/* <Router>
   
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}> </Navbar>
    <Alert alert={alert} />
    <Routes>
    <Route exact path="/" element={ <Textform showAlert={showAlert} mode={mode}/>} />
   
          <Route path="/about" element={<About />} />
          
          
          
         
      </Routes>
        
      </Router> */}
   

    </>
  );
}

export default App;
