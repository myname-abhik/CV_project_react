import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Pages_css/App.css'
import Home from './Pages/Home'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mov from './component/Mov';
import Signup from './component/Signup';
import Login from './component/Login';
import Chat from './component/Chat';

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <Router>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Mov/>}/>
        <Route path='/Chat' element={<Chat/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>

      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
