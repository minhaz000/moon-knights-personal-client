import React from 'react';
import About from '../About/About';
import Discount from '../Discount/Discount';
import Service from '../services/Service';
import Hero from './Hero';
import CategoryIcon from './Category';

const Home = () => {
    return (
        <div>
            <Hero> </Hero>
            <CategoryIcon></CategoryIcon>
            <Discount></Discount>
            <About></About>
            {/* <Service />  */}
        </div>
    );
};

export default Home;