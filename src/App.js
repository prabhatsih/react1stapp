import React from 'react';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/learn' element={<h1>Learnpage</h1>}/>
          <Route path='/reference' element={<h1>Reference Page</h1>}/>
          <Route path='/community' element={<h1>Community Page</h1>}/>
          <Route path='/ourcommunity' element={<h1>Our Community Page</h1>}/>
          <Route path='/mycommunity' element={<h1>My Community Page</h1>}/>
          <Route path='/blog' element={<h1>Blog Page</h1>}/>
          <Route path='/git' element={<h1>Git Page</h1>}/>
          <Route path='/github' element={<h1>Github Page</h1>}/>
          <Route path='/register' element={<h1>Register Page</h1>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
