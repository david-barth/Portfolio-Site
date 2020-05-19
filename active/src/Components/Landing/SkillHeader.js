import React from 'react';
import {Anchor, Box, Heading} from 'grommet'; 


const SkillHeader = (props) => {
    return (
        <React.Fragment>
            <Box gridArea={props.gridArea[0]} margin={{top: "large"}} direction="row" alignContent="between" justify="center" background="white">
                <Box height="80%">
                    <Anchor icon={props.iconComponent} />
                </Box>
            </Box>
            <Box gridArea={props.gridArea[1]} background="white" direction="column-reverse">
                <Heading textAlign="center" color="brand">{props.text}</Heading>
            </Box>
        </React.Fragment>
    )
}

export default SkillHeader; 