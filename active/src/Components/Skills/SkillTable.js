import React from 'react';
import {DataTable, Box, Meter, Text} from 'grommet'; 


const SkillTable = (props) => {
    
    const borderInfo = {
            color: "white",
            size: "large",
            style: "solid",
            side: "all"
      }
    
    return (
        <Box border={borderInfo} gridArea={props.gridArea} background="white">   
            <DataTable
                columns={[
                    {property: 'name',
                    header: <Text>Technology</Text>,
                    primary: true,
                    },
                    {property: 'percent',
                    header: 'Skill Level',
                    render: datum => (
                        <Box pad={{ vertical: 'xsmall' }}>
                        <Meter
                            values={[{ value: datum.percent }]}
                            thickness="small"
                            size="small"
                            color="brand"
                            background="brand"
                        />
                        </Box>
                        ),
                    },
                ]}
                data={[
                    { name: <Text color="brand">{props.text[0]}</Text>, percent: props.percentages[0] },
                    { name: <Text color="brand">{props.text[1]}</Text>, percent: props.percentages[1] },
                    { name: <Text color="brand">{props.text[2]}</Text>, percent: props.percentages[2] },
                    { name: <Text color="brand">{props.text[3]}</Text>, percent: props.percentages[3] },
                    { name: <Text color="brand">{props.text[4]}</Text>, percent: props.percentages[4] },
                    { name: <Text color="brand">{props.text[5]}</Text>, percent: props.percentages[5] },
                ]}
                />
        </Box>
    )
}

export default SkillTable;

//List of props needed: 

    //1. Text prop for texts of table. 

    //2. gridArea assignments. 

    //3. Percentages for each skill 