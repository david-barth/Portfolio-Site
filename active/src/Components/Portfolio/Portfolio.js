import React from 'react';
import {Box, Layer} from 'grommet';

//Component Imports: 
import Project from './Project'; 



const popUp = () => {
    return (
        <Layer>
            <div>
                <h1>hi</h1>
            </div>
        </Layer>
    )
}




const Portfolio = () => {

    return (
       <React.Fragment>
            <Box height="large" width="xlarge" margin={{left: "small", bottom: "medium"}}>
                <Project />
            </Box>
           
       </React.Fragment>
    )
}

export default Portfolio; 