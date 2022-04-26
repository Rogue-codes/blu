import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
