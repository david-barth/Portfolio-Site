import React from 'react'; 
import {Grid, Header, Heading} from 'grommet';


//Component Imports: 
import ProjectSlide from './ProjectSlide'; 
import Explanation from './Explanation'; 

const Project = () => {
    return (
        <Grid
            rows={['xsmall', 'large']}
            columns={['medium', 'large']}
            margin={{top: 'medium'}}
            areas={[
                {name: "Title", start: [0, 0], end: [1, 0]}, 
                {name: "Explanation", start: [0, 1], end: [0, 1]}, 
                {name: "Images", start: [1, 1], end: [1, 1]}
            ]}
            >
            
            <ProjectSlide />
            <Header gridArea="Title" justify="center" border="bottom">
                <Heading color="brand">Tweet News Recommender</Heading>
            </Header>
            <Explanation gridArea={"Explanation"}/>
            
        </Grid>
    )
}

export default Project; 