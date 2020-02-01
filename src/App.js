import React, { Component } from 'react';
import LandingImage from './components/LandingImage';
import Navbar from './components/Navbar';
// import About from './components/About';
// import Contact from './components/Contact';

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <LandingImage />
            </div>
        );
    }
}

export default App;