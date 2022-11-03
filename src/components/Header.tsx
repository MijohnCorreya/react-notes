import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

interface IHeaderProps{}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Notes
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header