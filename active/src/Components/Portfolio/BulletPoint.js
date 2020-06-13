import React from 'react'; 
import {Box, Heading, Text} from 'grommet'; 


const BulletPoint = (props) => {
    return (
        <Box gridArea={props.gridArea}>
            <Box pad={{left: "medium", right: "large"}}>
                <Heading level="3" textAlign="start" color="brand">
                    .{props.headingText}: 
                </Heading>
                <Text color="brand" textAlign="start"> 
                    -{props.bulletPointText}.
                </Text>
            </Box>
        </Box>
    )
}

export default BulletPoint; 