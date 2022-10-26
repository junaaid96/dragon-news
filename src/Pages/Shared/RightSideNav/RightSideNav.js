import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle} from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div className='p-5'>
            <ButtonGroup vertical>
                <Button variant="outline-danger">Login with <FcGoogle /> Google</Button>
                <Button variant="outline-success" className='mt-2'>Login with <FaGithub /> Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;