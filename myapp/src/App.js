import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NavBar from './Components/Navbar';
import ContactForm from './Components/Contact';
import States from './Components/States';
import States2 from './Components/States2';
import Profile from './Components/profilepic';
import Timer from './Components/count';



function App() {
  return (

    <Router>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/States" element={<States />} />
        <Route path="/States2" element={<States2/>} />
        <Route path="/profilepic" element={<Profile/>} />
        <Route path="/count" element={<Timer/>} />

        
     
    </Routes>
</Router>
);
};



export default App;
