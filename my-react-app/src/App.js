import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Annual from "./pages/annual";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/annual' element={<Annual/>} />
            </Routes>
        </Router>
    );
}

export default App;
