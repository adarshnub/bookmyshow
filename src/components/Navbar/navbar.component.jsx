import React from "react";
import {BiChevronRight, BiSearch} from "react-icons/bi";



const NavSm =()=>{
    return (
        <>
        <div className="text-white flex item-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It All Starts Here</h3>
                <span className="text-gray-400 text-xs flex items-center">Kottayam <BiChevronRight /></span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"/>
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
            <nav className="bg-gray-800 p-4">
                <div className="md:hidden"> <NavSm /> </div>
                <div className="hidden md:flex lg:hidden">{/*medium devices*/}</div>
                <div className="hidden lg:flex">{/*large devices*/}</div>

            </nav>
        </>
    );
};



export default Navbar;