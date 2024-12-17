import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Topics from './components/Topics'
import Articles from './components/Articles'
function App() {
 return (
  <>  
   <Header/>
      <Routes>
        <Route path="/" element={<Topics/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
      </Routes>
   <Footer/>
  </>
 )
}

export default App
