import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Signin from './screens/Signin';

function App() {
  return (
 
       <>
      
       <Routes>
          <Route path='/' element={<Signin />} />
          <Route path="/home" element={<Home />} />
           
           
       </Routes>
    </>

         
   
  );
}

export default App;
