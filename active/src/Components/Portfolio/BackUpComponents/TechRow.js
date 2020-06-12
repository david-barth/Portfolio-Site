import React from 'react'; 
import {Box, Text} from 'grommet'; 


const TechRow = () => {
    return (
        <Box direction="row" margin={{left: "medium"}} gap="large">
            <Box round={true} pad="xsmall" margin={{top: "small", bottom: "small"}} border={{color: "brand", size: "small", style: "groove", side: "all" }}>
                <Text color="brand">React</Text>
            </Box>
            <Box round={true} pad="xsmall" margin={{top: "small", bottom: "small"}} border={{color: "brand", size: "small", style: "groove", side: "all" }}>
                <Text color="brand">NodeJS</Text>
            </Box>
            <Box round={true} pad="xsmall" margin={{top: "small", bottom: "small"}} border={{color: "brand", size: "small", style: "groove", side: "all" }}>
                <Text color="brand">TensorflowJS</Text>
            </Box>
        </Box>    
    )
}

export default TechRow; 