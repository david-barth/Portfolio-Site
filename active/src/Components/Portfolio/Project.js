import React from 'react'; 
import {Grid} from 'grommet';


//Component Imports:
import Explanation from './Explanation'; 
import ProjectSlide from './ProjectSlide';
import ProjectTitle from './ProjectTitle'; 




const Project = (props) => {
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
            
            <ProjectTitle gridArea={"Title"} />
            <ProjectSlide />
            <Explanation gridArea={"Explanation"} popUp={props.popUp} />
            
        </Grid>
    )
}

export default Project; 