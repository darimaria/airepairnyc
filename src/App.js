import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/images/airepair_logo.png';
import stockphoto from './assets/images/ac-stockphoto.jpeg';
import manhattan from './assets/images/manhattan2.jpg';
import epa from './assets/images/certified-by-epa.png';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InformationBoxes from './InformationBoxes';

function App() {
  const [showButton, setShowButton] = useState(false);

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

  // FIXED NAVBAR

  return (
    <div>
      <header id="home">
        <nav id="nav">
          <div className="nav-center">
            <div className="nav-header">
              <img src={ logo } alt="logo" className="logo" />
              <img src={ epa } alt="epa" className="epa" />
            </div>
            <div className="links">
              <ul>
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
          <div className="container-content">
            <h1>Your Manhattan AC Repair Man</h1>
            <p>Choose Airepair for the best quality service on demand.</p>
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
        <div className="bigImgContainer">
            <img src={ manhattan } alt="manhattan"/>
            <div className="container-content">
              <h1>Join the Airepair Family</h1>
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
              treating your space like it's my own.
              <br />
              <br />
              So, if you need someone who combines old-school work ethic with top-notch expertise, 
              give me a call. I'm Michael, you go-to-guy for all things AC.
            </p>
            </div>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="title">
            <h2>Contact Us</h2>
        </div>
        <div className="contact-us-layout">
          <div>
            <img src={ logo } alt="logo" className="logo" />
          </div>
          <div>
            <p style={{fontFamily: 'Lato, sans-serif'}}> Reach out to get started with your next task </p>
          </div>
          <div>
            <p>
              <FontAwesomeIcon icon={ faPhone } size="2x" />
              <strong> Phone:</strong> 555-555-5555
            </p>
            <p>
              <FontAwesomeIcon icon={ faEnvelope } size='2x'/>
              <strong> Email:</strong> airepairnyc@gmail.com
            </p>
          </div>

        </div>
      </section>
      <footer>
        <div className="footer-center">
          <p>copyright &copy; Airepair
            <span className="date">2024</span>
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
