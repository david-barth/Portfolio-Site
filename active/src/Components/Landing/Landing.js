import React from 'react';
import {Grid, Box} from 'grommet'; 
import {Gallery, Transaction, Performance} from 'grommet-icons'; 
import SkillHeader from './SkillHeader'; 
import SkillTable from './SkillTable'; 

const Landing = () => {

    //Props Info for Header Sections: 
    const headerDetails = [
        {gridAreas: ['block1', 'block2'] , iconComponent: <Gallery color="brand" size="xlarge" />, text: 'Frontend'} , 
        {gridAreas: ['block3', 'block4'] , iconComponent: <Transaction color="brand" size="xlarge" />, text: 'Middle'},
        {gridAreas: ['block5', 'block6'] , iconComponent: <Performance color="brand" size="xlarge" />, text: 'Backend'},
    ]; 

    //Header Component Collection: 
    const skillHeaders = headerDetails.map(detailSet => {
        return <SkillHeader gridArea={detailSet.gridAreas}  
                            iconComponent={detailSet.iconComponent}
                            text={detailSet.text}
                            />         
    }); 

    //Grid Coordinates: 
    const gridAreaList = [ 
                    {name: 'block1', start: [0, 0], end: [0, 0]},
                    {name: 'block2', start: [0, 1], end: [0, 1]},
                    {name: 'block3', start: [1, 0], end: [1, 0]},
                    {name: 'block4', start: [1, 1], end: [1, 1]},
                    {name: 'block5', start: [2, 0], end: [2, 0]},
                    {name: 'block6', start: [2, 1], end: [2, 1]},
                    {name: 'block7', start: [0, 2], end: [0, 3]},
                    {name: 'block8', start: [1, 2], end: [1, 3]},
                    {name: 'block9', start: [2, 2], end: [2, 3]},
                ]; 

    return (
        <Grid rows={['small', 'xsmall', 'xsmall', 'small']}
              columns={['medium', 'medium', 'medium']}
              areas={gridAreaList}
                >
        
        {skillHeaders}

        <Box gridArea="block7" background="white">
            <SkillTable />
        </Box>

        <Box gridArea="block8" background="white">
           
        </Box>

        <Box gridArea="block9" background="white"> 
            
        </Box>

        </Grid>
    )
}

export default Landing;