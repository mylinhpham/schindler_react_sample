import logo from './logo.svg';
import './App.css';
import Home from "./home";
import About from "./backgroundInfo";
import Courses from "./courses";
import { TypographyStyle } from 'react-typography';
function App() {
  return (
    <div className="App">
        <div className="navBar">
            <div style={{ paddingRight: '10px', fontSize: '24px' }}><h1>UCI</h1></div>
            <div style={{ fontSize: '18px', paddingTop: '50px'}}>{`Donald Bren School of \nInformation and Computer Science`}</div>
        </div>
          <Courses />
          <About />
        <Home />
    </div>
  );
}

export default App;
