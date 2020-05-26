import React from 'react';
import {Box, Heading, Paragraph, Button} from 'grommet'; 



const Explanation = (props) => {
    return (
        <Box gridArea={props.gridArea}  >
            <Heading color="brand" size="small" margin={{bottom: "medium"}}>Machine Learning and Social Media</Heading> 
            <Paragraph color="brand">
                A web app that uses Javascript, machine learning, and tweets to serve users news topics.  
                This app is proof-of-concept, but it shows the power of machine learning applied to social media.   
            </Paragraph>
            <Box direction="row" margin="medium" justify="center">
                <Button default margin="small" label="More Info" />
                <Button href="https://github.com/david-barth/Treehouse-Project-12-Web-App" margin="small" label="GitHub" />
            </Box>
        </Box>
    )
}

export default Explanation; 