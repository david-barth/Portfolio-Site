import React from 'react'; 
import {Anchor, Box, Header, Heading} from 'grommet'; 
import {CaretNext, CaretPrevious} from 'grommet-icons'; 


const ProjectTitle = (props) => {
    return (
        <Header gridArea={props.gridArea} justify="center" border="bottom">
            <Box margin={{right: "xlarge"}}>
                <Anchor icon={<CaretPrevious size="large"/>} label="Previous" reverse={true} />
            </Box>
            <Heading color="brand">Tweet News Recommender</Heading>
            <Box margin={{left: "xlarge"}}>
                <Anchor icon={<CaretNext size="large" />} label="Next"/>
            </Box>
        </Header>
    )
}

export default ProjectTitle; 