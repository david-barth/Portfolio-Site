import React from 'react';
import './custom.css';
import { Grommet, Grid, Box } from 'grommet'; 
 
//Component Imports: 
import Landing from './Components/Landing/Landing'; 
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
            <Box gridArea="sideNav" background="accent-2" >
              <SocialMediaBar />
            </Box>
            <Box gridArea="content" background="accent-1" > 
              <Landing />
            </Box>
           </Grid>
    </Grommet>
  );
}

/*<NavBar gridArea="header"/>
<NavBar gridArea="header"/>*/


export default App;
