import React from 'react'; 
import {Box, Carousel, Image} from 'grommet'; 


const ProjectSlide = (props) => {
    return (         
        <Box gridArea={props.gridArea}> 
            <Carousel fill play={5000} controls={false}>
                <Box height="medium" background="brand">
                <Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
                </Box>
                <Box height="medium" background="brand">
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
                </Box>
                <Box height="medium" background="brand">
                <Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
                </Box>
            </Carousel>
        </Box>
    )
}

export default ProjectSlide; 