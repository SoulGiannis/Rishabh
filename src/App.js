import './App.css';
import { Banner } from './Components/Banner';
import { Contact } from './Components/Contact';
import {NavBar} from './Components/NavBar'
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Folder } from 'react-bootstrap-icons';

function App() {
  return (
    <div>
      <NavBar />
          <Banner />  
          <Skills />
          <Projects />
          <Contact />
      
    </div>
  );
}

export default App;
