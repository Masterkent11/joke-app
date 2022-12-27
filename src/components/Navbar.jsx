import React,{useState} from 'react';
import pathIcon from '../assets/images/assets_Homework_Front-End_02/path.png'
import shapeIcon from '../assets/images/assets_Homework_Front-End_02/shape.png'


const Navbar = () => {
const DropDownItem = ()=>{
    return(
        <li>
            <img src={shapeIcon} alt="" />
            <a href="#">MEIN BEREICH</a>
            <img src={pathIcon} alt="" />
       
        </li>
    )
}
    return (
        <>
            <header>
                    <ul>
                        <li><a href="#">SO FUNCTIONIERT'S</a></li>
                        <li><a href="#">SONDERANGEBOTE</a></li>
                        <DropDownItem/>
                    </ul>
            </header>
        </>
    );
};

export default Navbar;