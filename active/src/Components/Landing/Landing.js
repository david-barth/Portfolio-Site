import React from 'react';
import {Grid, Box} from 'grommet'; 

//Component Imports: 
import About from './About'; 
import DiagramBar from './DiagramBar'; 
import Stats from './Stats'; 


const Landing = () => {
    return (
        <Grid rows={['small', 'medium']}
              columns={['flex', 'large']}
              areas={[ 
                    {name: 'block1', start: [0, 0], end: [0, 1]},
                    {name: 'block2', start: [1, 0], end: [1, 0]},
                    {name: 'block4', start: [1, 1], end: [1, 1]},
                                    ]}
                >

            <Box gridArea="block1" > 
                <About />
            </Box>

            <Box gridArea="block2" > 
                <DiagramBar />
            </Box>

            <Box gridArea="block4" >
                <Stats /> 
            </Box>
        </Grid>
    )
}

export default Landing; 


