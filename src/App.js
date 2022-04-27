import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { useState } from "react";
import styled from 'styled-components'
import {IoMdArrowDropupCircle} from 'react-icons/io'

const Container = styled.div`
    background: ${props => props.bg};
    color: ${props => props.cl};
    transition: all .5s linear;
`
const BT = styled.button`
  @media (max-width:480px) {
    left: 80%;
  }
  cursor: pointer;
  position: fixed;
  left: 95%;
  top: 90%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all .5s linear;
  opacity: ${props => props.opa};
  border: none;
  background: #0680bcc2;
`

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    console.log('first')
  }

  const [scroll, setScroll] = useState(false)
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 700){
      setScroll(true)
    }else{
      setScroll(false)
    }
  })

  return (
    <Container bg={darkMode ? '#000' : null} cl={darkMode ? '#fff' : null} className="App">
      <Router>
        <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />}/>
          <Route path="/about" element={<About darkMode={darkMode}/>}/>
          <Route path="/service" element={<Service darkMode={darkMode}/>}/>
          <Route path="/contact" element={<Contact darkMode={darkMode}/>}/>
        </Routes>
        <a href="#top">
          <BT opa={scroll ? '1' : '0'}><IoMdArrowDropupCircle size='2rem' color='black'/></BT>
        </a>
        <Footer darkMode={darkMode} />
      </Router>
      
    </Container>
  );
}

export default App;
