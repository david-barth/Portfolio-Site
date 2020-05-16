import React from 'react';
import {Anchor, Box, Diagram, Nav, Text} from 'grommet'; 
import {Directions, Cluster, Optimize} from 'grommet-icons'; 

const DiagramBar = () => {
    const borderOptions = {
        color: "white",
        size: "small",
        style: "solid",
        side: "vertical"
    }; 

    return (
        <Nav direction="row" background="brand" pad="large" justify="center">
            <Box id="1" justify="center" height="xsmall"  gap="none" margin={{right: 'xlarge'}} border={borderOptions}>
                <Anchor icon={<Directions color="white" size="xlarge" />} />
                <Text textAlign="center">Innovative</Text>
            </Box>

            <Box id="2" justify="center" height="xsmall" border={borderOptions}>
                <Anchor icon={<Cluster color="white" size="xlarge"/>} />    
                <Text color="plain" textAlign="center">Integrated</Text>
            </Box>

            <Box id="3" justify="center" height="xsmall" margin={{left: 'xlarge'}} border={borderOptions}>
                <Anchor icon={<Optimize color="white" size="xlarge"/>} />
                <Text color="plain" textAlign="center">Intensive</Text>
            </Box>    
        </Nav>
    );
}

export default DiagramBar; 