import React from 'react'; 
import {Box, Heading, Markdown, Layer, Grid} from 'grommet'; 


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
                
                <Box gridArea="wordSummary" color="brand" border="all">
                    <Heading color="brand" level="2">
                        The Details
                    </Heading>
                    <Markdown color="brand">
                        Combining **machine learning** and **REST APIs**
                    </Markdown>
                </Box>

                <Box gridArea="techSummary" border="all">
                    <h1>hi</h1>
                </Box>

            </Grid>
        </Layer>
    )

}

export default ModalSkills; 