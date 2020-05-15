import React from 'react';
import {Header, Nav, Anchor} from 'grommet';  
import {Home, Code, ChatOption, Sort} from 'grommet-icons'; 


const NavBar = () => {
    return (
        <Header background="brand" gap="small" justify="center">
            <Nav direction="row" background="brand" pad="medium">
                <Anchor icon={<Home size="large"/>} label="Home" />
                <Anchor icon={<Code size="large"/>} label="Portfolio" />
                <Anchor icon={<Sort size="large"/>} label="Resume" />
                <Anchor icon={<ChatOption size="large"/>} label="Get in Touch" />
            </Nav>
        </Header>
    )
}

export default NavBar