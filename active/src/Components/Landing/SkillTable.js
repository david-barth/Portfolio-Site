import React from 'react';
import {Avatar, DataTable, Box, Meter, Text} from 'grommet'; 
import {Html5, Css3, Reactjs} from 'grommet-icons'; 


const Javascript = () => {
    return (
        <Box direction="row"  gap="small">
            <Avatar src="../../Images/JS.png" />   
        </Box>
    )
}


const SkillTable = () => {
    return (
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
                    />
                    </Box>
                    ),
                },
            ]}
            data={[
                { name: <Javascript />, percent: 20 },
                { name: <Html5 color="brand" size="large" />, percent: 30 },
                { name: <Css3 color="brand" size="large" />, percent: 40 },
                { name: <Reactjs color="brand" size="large" />, percent: 80 },
            ]}
            />
    )
}


export default SkillTable;