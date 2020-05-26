import React from 'react';
import {Box, Carousel} from 'grommet';

//Component Imports: 
import ProjectSlide from './ProjectSlide'; 

const Portfolio = () => {

    return (
        <Box height="large" width="xlarge" margin={{left: "small"}}>
            <Carousel fill controls="selectors">
                <ProjectSlide />
            </Carousel>
        </Box>
    )
}

export default Portfolio; 