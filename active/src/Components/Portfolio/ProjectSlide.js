import React from 'react'; 
import {Box, Button, Header, Heading, Grid, Paragraph} from 'grommet'; 


const ProjectSlide = () => {
    return (
        <Grid rows={['xsmall', 'large']}
              columns={['medium', 'large']}
              margin={{top: 'medium'}}
              areas={[
                  {name: "Title", start: [0, 0], end: [1, 0]}, 
                  {name: "Explanation", start: [0, 1], end: [0, 1]}, 
                  {name: "Images", start: [1, 1], end: [1, 1]}
              ]}
                >
            
            <Header gridArea="Title" justify="center" border="bottom">
              <Heading color="brand">Tweet News Recommender</Heading>
            </Header>

            <Box gridArea="Explanation"  >
                <Heading color="brand" size="small" margin={{bottom: "medium"}}>Machine Learning and Social Media</Heading> 
                <Paragraph color="brand">
                    A web app that uses Javascript, machine learning, and tweets to serve users news topics.  
                    This app is proof-of-concept, but it shows the power of machine learning applied to social media.   
                </Paragraph>
                <Box direction="row" margin="medium" justify="center">
                    <Button default margin="small" label="Tell me more!" />
                    <Button default margin="small" label="Live Demo" />
                </Box>
            </Box>


            <Box gridArea="Images" background="accent-1" />

        </Grid>
    )
}

export default ProjectSlide; 