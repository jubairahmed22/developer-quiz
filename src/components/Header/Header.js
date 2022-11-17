import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import './Header.css'

const Header = () => {
    return (
        <>

            <Navbar bg="dark" variant="dark" className='shadow'>
                <Container>
                    <Navbar.Brand href="#home">PRODOTWEB Quiz</Navbar.Brand>
                    <Nav className="me-auto g-5">

                        <div className='navbar'>
                            <Link to='/'>Topics</Link>
                            <Link to='/statistics'>Statistics</Link>
                            <Link to='/blog'>Blog</Link>
                        </div>

                    </Nav>
                    
                </Container>
            </Navbar>


        </>
    );
}

export default Header;

// <Link to='/'>Topics</Link>
// <Link to='/statistics'>Statistics</Link>
// <Link to='/blog'>Blog</Link>