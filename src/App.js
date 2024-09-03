import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/images/airepair_logo.png';
import stockphoto from './assets/images/ac-stockphoto.jpeg';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InformationBoxes from './InformationBoxes';

function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  // BOTTOM TO TOP SCROLL BUTTON
  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // NAVIGATION TOGGLE
  const handleNavToggle = () => {
    console.log("Nav toggle clicked");  // Add this to check if the function is being called
    setShowLinks(!showLinks);
  };

  // FIXED NAVBAR

  return (
    <div>
      <header id="home">
        <nav id="nav">
          <div className="nav-center">
            <div className="nav-header">
              <img src={ logo } alt="logo" className="logo" />
              <button className="nav-toggle" onClick={ handleNavToggle }>
                <FontAwesomeIcon icon={ faBars } />
              </button>
            </div>
            <div className={`links-container ${showLinks ? 'show-links' : ''}`}>
              <ul className="links">
                <li><a href="#home" className="scroll-link">Home</a></li>
                <li><a href="#services" className="scroll-link">Services</a></li>
                <li><a href="#about" className="scroll-link">About</a></li>
                <li><a href="#contact" className="scroll-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bigImgContainer">
          <img src={ stockphoto } alt="stockphoto"/>
          <div>
            <h1 style={{ fontSize: '40px' }}>Your Manhattan AC Repair Man</h1>
            <p style={{ fontSize: '20px' }}>Choose Airepair for the best quality service on demand.</p>
          </div>
        </div>
      </header>
      <section id="services" className="section">
        <div className="title">
          <h2>Our Services</h2>
        </div>
        <InformationBoxes />
      </section>
      <section id="about" className="section">
        <div className="title">
          <h2>About Us</h2>
        </div>
        <p>
            Airepair is a family-owned business that is dedicated to serving Manhattan
            and the surrounding areas with quality appliance repair services. 
            <br />
            <br />
            My name is Michael and I'm a new business owner but I've got a lifetime of 
            experience behind me. I am EPA certified and know AC systems inside and out.
            Whether it's a quick fix, a full installation, or just some good maintenance and
            advice, I've got you covered. I specialize in providing personalized, reliable 
            handyman services to both homes and businesses right here in Manhattan.
            <br />
            <br />
            Why choose Airepair? Because I'm a straight shooter who takes pride in a job well
            done. I believe in showing up on time, getting the work done right the first time and
            tresting your space like it's my own.
            <br />
            <br />
            So, if you need someone who combines old-school work ethic with top-notch expertise, 
            give me a call. I'm Michael, you go-to-guy for all things AC.
          </p>
      </section>
      <section id="contact" className="section">
        <div className="title">
          <h2>Contact Us</h2>
        </div>
      </section>
      <footer>
        <div className="footer-center">
          <p>copyright &copy; Airepair
            <span className="date">2021</span>
            .all rights reserved
          </p>
        </div>
      </footer>
      <a href="#home" className="scroll-link top-link"> 
        {showButton && (
          <button className="button-up" id="scrollButton">
          <FontAwesomeIcon icon={ faArrowUp } />
        </button>
        )}
      </a>
    </div>
  );
}

export default App;
