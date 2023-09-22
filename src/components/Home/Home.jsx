import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import FeaturesJobs from '../FeaturesJobs/FeaturesJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturesJobs></FeaturesJobs>
            
        </div>
    );
};

export default Home;