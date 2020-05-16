import React from 'react';
import {Header, Nav, Anchor} from 'grommet';  
import {Home, Code, ChatOption, Sort} from 'grommet-icons'; 


const NavBar = () => {
    return (
        <Header background="brand" gap="small" justify="center">
            <Nav direction="row" background="brand" pad="medium">
                <Anchor icon={<Home size="large" color="white" />} color="white" label="Home" />
                <Anchor icon={<Code size="large" color="white" />} color="white" label="Portfolio" />
                <Anchor icon={<Sort size="large"color="white" />} color="white" label="Resume" />
                <Anchor icon={<ChatOption size="large" color="white" />} color="white" label="Get in Touch" />
            </Nav>
        </Header>
    )
}

export default NavBar