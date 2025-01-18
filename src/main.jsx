import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import SideImg from './components/SideImg.jsx';
import SideBar from './components/SideBar.jsx';
import About from './components/About.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   
  <BrowserRouter>
  <Header />
    <SideBar />
    <Routes>
      <Route  path="/" element={<About/>}></Route>
    </Routes>
  <Footer />
  </BrowserRouter>
  
    
    
  </StrictMode>,
)
