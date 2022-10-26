
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

function Header() {
    return (
        <Navbar bg="light" expand="lg" className='mb-4'>
            <Container>
                <Navbar.Brand>Dragon News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto me-2">
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/'>Home</NavLink>
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/news/:id'>News</NavLink>
                        <NavLink className='text-decoration-none mx-2 text-dark fw-bold' to='/category/:id'>Category</NavLink>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;