import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-lemon-three.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div>
            {
                categories.map(category => <Link key={category.id} className='d-block' to={`category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;