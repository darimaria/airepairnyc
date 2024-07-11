import './App.css';
import Header from './Header';
import InformationBoxes from './InformationBoxes';
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
      <div>
        <h1 style={{"text-align":"center"}}>
          We <span style={{color:"red"}}>strive </span> for your confidence and comfort. 
          We <span style={{color:"red"}}>deliver</span> that by maintaining our 3 core values.
        </h1>
        <InformationBoxes />
      </div>
    </body>
  );
}

export default App;
