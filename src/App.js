// App.js (React Router setup)

import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import  Course       from './Components/Course.jsx'

// import SignIn from './SignIn';
 // Import general styling if needed

const App = () => {
  return (

    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
         <Route path="/login" element= {<Login/>} />
         <Route path="/signup" element= {<Signup/>} />
         <Route path="/fetchcourse" element= {<Course/>} />
  
     
      </Routes>
    </BrowserRouter>
  );
};

export default App;
