import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaTwitch, FaInstagram, FaReddit } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div className='p-5'>
            <ButtonGroup vertical>
                <Button variant="outline-danger"><FcGoogle /> Login with Google</Button>
                <Button variant="outline-success" className='mt-2'><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-5'>
                <p>Find Us On</p>
                <ButtonGroup vertical>
                    <Button variant="light" className='px-5 border'><FaFacebook /> Facebook</Button>
                    <Button variant="light" className='px-5 mt-2 border'><FaTwitter /> Twitter</Button>
                    <Button variant="light" className='px-5 mt-2 border'><FaTwitch /> Twitch</Button>
                    <Button variant="light" className='px-5 mt-2 border'><FaInstagram /> Instagram</Button>
                    <Button variant="light" className='px-5 mt-2 border'><FaReddit /> Reddit</Button>
                </ButtonGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;