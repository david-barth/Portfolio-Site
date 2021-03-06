import React from 'react';
import './custom.css';
import { Grommet, Grid, Box } from 'grommet'; 
 
//Component Imports: 
import Portfolio from './Components/Portfolio/Portfolio';
//import Skills from './Components/Skills/Skills'; 
import NavBar from './Components/Global/NavBar'; 
import SocialMediaBar from './Components/Global/SocialMediaBar'; 


function App() {
  return (
    <Grommet>
       <Grid
              rows={['auto', 'small', 'medium']}
              columns={['small', 'auto', 'auto']}
              gap="small"
              areas={[
                { name: 'header', start: [0,0], end: [2, 0] },
                { name: 'sideNav', start: [0,1], end: [0, 2] },
                { name: 'content', start: [1,1], end: [2, 2] },
              ]}
            >
            <Box gridArea="header" background="brand" >
              <NavBar />
            </Box>
            <Box gridArea="sideNav"  >
              <SocialMediaBar />
            </Box>
            <Box gridArea="content"  > 
              <Portfolio />             
            </Box>
           </Grid>
    </Grommet>
  );
}


export default App;
