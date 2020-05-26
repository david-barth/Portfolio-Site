import React from 'react';
import {Anchor, Box, Footer} from 'grommet';
import {CaretNext, CaretPrevious} from 'grommet-icons';

//Component Imports: 
import Project from './Project'; 



const Portfolio = () => {

    return (
       <React.Fragment>
            <Box height="large" width="xlarge" margin={{left: "small", bottom: "medium"}}>
                <Project />
            </Box>
            <Footer justify="start" gap="xlarge" margin={{top: "xlarge"}}>
                <Box margin={{left: "xlarge"}}>
                    <Anchor icon={<CaretPrevious size="large"/>} label="Next Project"/>
                </Box>
                <Box margin={{right: "large"}}>
                    <Anchor icon={<CaretNext size="large" />} label="Previous Project"/>
                </Box>
            </Footer> 
       </React.Fragment>
    )
}

export default Portfolio; 