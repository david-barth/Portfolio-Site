import React from 'react'; 
import {Box, Button, Heading, Layer, Grid} from 'grommet'; 

//Component Imports: 
import TechRow from './TechRow'; 
import BulletPoint from './BulletPoint';  


const ModalSkills = (props) => {

    //Raw Info: 
    const techRowCounts = [1, 2, 3]; 
    const bulletPointCounts = [1, 2, 3, 4]; 
    const bulletPointInfo = [
        {gridArea: "Bullet1", headingText: "RESTful", bulletPointText: "The web app uses 2 REST APIs: Twitter and The Guardian News."}, 
        {gridArea: "Bullet2", headingText: "Machine Learning", bulletPointText: "A trained neural network is integrated serverside, based on the powerful Tensorflow API."},
        {gridArea: "Bullet3", headingText: "Supervised Training", bulletPointText: "The neural network is fully customized and self-trained using 80000+ scrapped tweets."},
        {gridArea: "Bullet4", headingText: "React Powered", bulletPointText: "The UI is powered by ReactJS and styled on the popular Materialize UI framework."},
    ]; 

    //Component Collections: 
    const techRows = techRowCounts.map(() => <TechRow />)
    const bulletPoints = bulletPointCounts.map((entry, i) => <BulletPoint gridArea={bulletPointInfo[i].gridArea} 
                                                                   headingText={bulletPointInfo[i].headingText}
                                                                   bulletPointText={bulletPointInfo[i].bulletPointText}/>)

    return (
        <Layer  onEsc={props.popUp}
                onClickOutside={props.popUp}>
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
                    ]}>
                <Box gridArea="Title">
                    <Heading level="2" textAlign="center" color="brand">
                        #The Details
                    </Heading>
                </Box>
                {bulletPoints}
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
                    {techRows}
                </Box>
            </Grid>
        </Layer>
    )

}

export default ModalSkills; 