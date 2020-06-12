import React from 'react'; 
import {Box, Button, Heading, Layer, Grid, Text} from 'grommet'; 

 

const ModalSkills = (props) => {

    return (
        <Layer  onEsc={props.popUp}
                onClickOutside={props.popUp}        
        >

        <Grid
                rows={["xsmall", "small", "small", "xsmall"]}
                columns={["medium", "medium", "medium"]}
                areas={[
                    {name: "Title", start: [0, 0], end: [2, 0]},
                    {name: "Bullet1", start: [0, 1], end: [0, 1]},
                    {name: "Bullet2", start: [1, 1], end: [1, 1]},
                    {name: "Bullet3", start: [0, 2], end: [0, 2]},
                    {name: "Bullet4", start: [1, 2], end: [1, 2]},
                    {name: "SeeMoreBtn", start: [0, 3], end: [1, 3]},
                    {name: "TechList", start: [2, 1], end: [2, 3]}
                ]}
        >

            <Box gridArea="Title">
                <Heading level="2" textAlign="center" color="brand">
                    #The Details
                </Heading>
            </Box>

            <Box gridArea="Bullet1">
                <Box pad={{left: "medium", right: "large"}}>
                    <Heading level="3" textAlign="start" color="brand">
                        .RESTful: 
                    </Heading>
                    <Text color="brand" textAlign="start"> 
                        -The web app uses 2 REST APIs: Twitter and The Guardian News
                    </Text>
                </Box>
            </Box>

            <Box gridArea="Bullet2">
                <Box pad={{left: "medium", right: "large"}}>
                    <Heading level="3" textAlign="start" color="brand">
                        .Machine Learning: 
                    </Heading>
                    <Text color="brand" textAlign="start"> 
                        -A trained neural network is integrated serverside, based on the powerful Tensorflow API.
                    </Text>
                </Box>
            </Box>

            <Box gridArea="Bullet3">
                <Box pad={{left: "medium", right: "large"}}>
                    <Heading level="3" textAlign="start" color="brand">
                        .Supervised Training: 
                    </Heading>
                    <Text color="brand" textAlign="start"> 
                        -The neural network is fully customized and self-trained using 80000+ scrapped tweets.
                    </Text>
                </Box>
            </Box>

            <Box gridArea="Bullet4">
                <Box pad={{left: "medium", right: "large"}}>
                    <Heading level="3" textAlign="start" color="brand">
                        .React Powered 
                    </Heading>
                    <Text color="brand" textAlign="start"> 
                        -The UI is powered by ReactJS and styled on the popular Materialize UI framework.
                    </Text>
                </Box>
            </Box>
            
            <Box gridArea="SeeMoreBtn">
                <Button 
                    default 
                    margin="small" 
                    label="Live Demo" 
                    href="https://tweetrec.herokuapp.com/"
                    alignSelf="center"
                    size="large"
                />
            </Box>

            <Box gridArea="TechList" border={{color: "brand", size: "small", style: "solid", side: "left"}}>
                <Box direction="row">
                    <Box round={true} border={{color: "brand", size: "small", style: "solid", side: "all"}}>
                        <Text>
                            Tech1
                        </Text>
                    </Box>
                    <Box round={true} border={{color: "brand", size: "small", style: "solid", side: "all"}}>
                        <Text>
                            Tech2
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Grid>
            
        </Layer>
    )

}

export default ModalSkills; 