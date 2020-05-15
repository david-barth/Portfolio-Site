import React from 'react';
import './custom.css';
import { Grommet } from 'grommet'; 
 
//Component Imports: 
import Landing from './Components/Landing/Landing'; 
import NavBar from './Components/Global/NavBar'; 
import SocialMediaBar from './Components/Global/SocialMediaBar'; 

function App() {
  return (
    <Grommet>
      <NavBar />
      <SocialMediaBar /> 
      <Landing /> 
    </Grommet>
  );
}

export default App;
