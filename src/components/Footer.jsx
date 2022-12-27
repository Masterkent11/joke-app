import React from 'react';
import FooterImage from '../assets/images/assets_Homework_Front-End_01/bitmap_2@2x.png'
import FooterIcon from '../assets/images/assets_Homework_Front-End_02/path-copy-3.png'

const Footer = () => {
    return (
        <>
            <div id='footer'>
              <img src={FooterImage} alt=""/>
              <div className="textFooter">
                <h2>Got Jokes? Get Paid</h2>
                <h2>For Submitting</h2>
               <div className='clickFooter'> 
                <h3>Submit Joke</h3>
                <img src={FooterIcon} alt="" />
               </div>
              </div>
            </div>
        </>
    );
};

export default Footer;