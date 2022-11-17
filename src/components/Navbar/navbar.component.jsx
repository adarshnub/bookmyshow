import React from "react";
import {BiChevronRight} from "react-icons/bi";



const NavSm =()=>{
    return (
        <>
        <div>
            <div>
                <h3>It All Starts Here</h3>
                <span>KOTTAYAM <BiChevronRight /></span>
            </div>
        </div>
        </>
    );
};
const NavMd =()=>{};
const NavLg =()=>{};


const Navbar =()=> {
    return (
        <>
            <nav>
                <div className="md:hidden"> <NavSm /> </div>
                <div className="hidden md:flex lg:hidden">{/*medium devices*/}</div>
                <div className="hidden lg:flex">{/*large devices*/}</div>

            </nav>
        </>
    );
};



export default Navbar;