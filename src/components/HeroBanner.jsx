import React from 'react';
import Search from './Search';


const HeroBanner = () => {
    return (
        <>
        <div id='heroBanner'>
            <div className='titleHeader'>
                <h1>The Joke Bible</h1>
                <h2>Daily Laughs for you and yours</h2>
                <Search />
            </div>
            
        </div>
           
        </>
    );
};

export default HeroBanner;