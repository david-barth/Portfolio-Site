import React from 'react'; 
import {Box, Heading} from 'grommet'; 

//Component Imports: 
import TechRow from './TechRow'; 

//Globals: 
const techRowNumber = [1, 2, 3]; 


const TechSummary = () => {

    const techRows = techRowNumber.map(() => <TechRow />); 
    
    return (
        <Box gridArea="techSummary" border="all" direction="column" justify="centers">
            <Box margin={{bottom: "medium"}}>
                <Heading level="2" textAlign="center" color="brand">The Technologies</Heading>
            </Box>
            {techRows}
        </Box>
    )
}

export default TechSummary; 