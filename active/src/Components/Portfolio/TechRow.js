import React from 'react'; 
import {Box, Text} from 'grommet'; 



const TechRow = () => {
    return (
        <Box margin="medium" gap="large" justify="center" direction="row">
            <Box pad="small" round={true} border={{color: "brand", size: "small", style: "solid", side: "all"}}>
                <Text textAlign="center">
                    Technology 1 
                </Text>
            </Box>
            <Box pad="small" round={true} border={{color: "brand", size: "small", style: "solid", side: "all"}}>
                <Text textAlign="center">
                    Technology 2
                </Text>
            </Box>
        </Box>
    )
}

export default TechRow;