import React from 'react'; 
import {Box, Button, Heading, Layer, List, Grid} from 'grommet'; 


const ModalSkills = (props) => {

    return (
        <Layer  onEsc={props.popUp}
                onClickOutside={props.popUp}        
                        >
            <Grid
                rows={['medium', 'small']}
                columns={['medium', 'small', 'medium']}
                areas={[
                    {name: "wordSummary", start: [0, 0], end: [1, 1]}, 
                    {name: "techSummary", start: [2, 0], end: [2, 1]}, 
                ]}
                >
                
                <Box gridArea="wordSummary" color="brand" border="all" >
                    <Heading color="brand" level="2" alignSelf="center">
                        The Details
                    </Heading>
                    <List
                        primaryKey="point"
                        secondaryKey="explanation"
                        pad="small"
                        margin={{left: "medium", right: "medium"}}
                        background={["brand", "brand", "brand", "brand"]}
                        data={[
                            { point: 'RESTFUL:', explanation: "The web app uses 2 REST APIs: Twitter and The Guardian News" },
                            { point: 'Machine Learning:', explanation: "A trained neural network is integrated serverside, based on the powerful Tensorflow API (JS implementation)." },
                            { point: 'Supervised Training', explanation: "The neural network is fully customized and self-trained using 80000+ scrapped tweets, gathered with custom tools" },
                            { point: 'React Powered', explanation: "The frontend is powered by ReactJS and styling is based on the popular Materialize UI framework"},
                        ]}
                    />
                    <Button 
                            default 
                            margin="small" 
                            label="Live Demo" 
                            href="https://tweetrec.herokuapp.com/"
                            alignSelf="center"
                            />

                </Box>

                <Box gridArea="techSummary" border="all">
                    <Box direction="row">
                        <Button primary label="React" />
                        <Button primary label="TensorFlowJS" />
                        <Button primary label="REST API" />
                    </Box>
                    <Box direction="row">
                        <Button primary label="Materialize UI" />
                        <Button primary label="ExpressJS" />
                        <Button primary label="NodeJS" />
                    </Box>
                </Box>

            </Grid>
        </Layer>
    )

}

export default ModalSkills; 