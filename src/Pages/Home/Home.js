import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h4 className='text-primary'>Total News Found: {allNews.length}</h4>
            {
                allNews.map(summaryNews => <NewsSummaryCard key={summaryNews._id} summaryNews={summaryNews}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;