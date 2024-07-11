import './App.css';
import Header from './Header';
import logo from './assets/images/airepair_logo.png';
import epa from './assets/images/certified-by-epa.png';
import stockphoto from './assets/images/ac-stockphoto.jpeg';

function App() {
  return (
    <body>
      <div>
        <Header logo={logo} certification={epa} />
      </div>
      <div className="bigImgContainer">
        <img src={stockphoto} alt="stockphoto"/>
        <div style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%"}}>
          <h1>Your Manhattan AC Repairman</h1>
          <p>For dependable, efficient, and professional service.</p>
        </div>
      </div>
    </body>
  );
}

export default App;
