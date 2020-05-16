import React from 'react';
import {Sidebar, Anchor} from 'grommet'; 
import {Linkedin, Facebook, Github} from 'grommet-icons'; 



const Bar = () => {
    return (
        <Sidebar 
                 background="brand" 
                 width="xsmall" 
                 round="small" 
                 gap="small"
                 height={{"min":"50%"}}
                 margin={{left:"small", 
                          top: "xlarge"}}>
            <Anchor label="Connect with me!" color="white" />
            <Anchor href="https://www.linkedin.com/in/david-barth" icon={<Linkedin size="large"color="white" />}/>
            <Anchor href="https://www.facebook.com/dzb10035/" icon={<Facebook size="large" color="white" />}/>
            <Anchor href="https://github.com/david-barth" icon={<Github size="large"/>} color="white" />
        </Sidebar>
    )
}


const SocialMediaBar = () => {
    return (
        <Bar />
    )
}

export default SocialMediaBar; 