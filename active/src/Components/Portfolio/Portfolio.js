import React, {Fragment, useState} from 'react';
import {Box} from 'grommet';

//Component Imports: 
import Project from './Project'; 
import ModalSkills from './ModalSkills'; 

const Portfolio = () => {

    const [show, setShow] = useState(1);
    const showUp = show === 2 ? <ModalSkills popUp={() => setShow(show - 1)} /> : null;  
   
    return (
       <Fragment>
            <Box height="large" width="xlarge" margin={{left: "small", bottom: "medium"}}>
                <Project  popUp={() => {setShow(show + 1)}} />
            </Box>
            {showUp}
       </Fragment>
    )
}

export default Portfolio; 