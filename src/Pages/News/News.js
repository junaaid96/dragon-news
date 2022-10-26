import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    return (
        <div>
            <h1>{news.title}</h1>
        </div>
    );
};

export default News;