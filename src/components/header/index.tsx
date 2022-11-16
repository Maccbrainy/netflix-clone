// import { useEffect, useState } from "react";

import { MdNotifications, MdArrowDropDown } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";

const NavBar = ({changeBgOnScroll}:any) => {
return(
    <nav className={`fixed h-[70px] transition bg-gradient-to-b
    from-[#000000b3]
    w-full flex justify-center px-4 sm:px-5 md:px-6 lg:px-8 mx-auto z-10 ${changeBgOnScroll && 'bg-[#141414]'}`}>
        <div className='w-full flex flex-row justify-between items-center flex-nowrap text-sm'>
        <div className='flex flex-row justify-start gap-16'>
            <div>Logo</div>
            <ul className='flex justify-start items-center gap-6'>
            <li><a>Home</a></li>
            <li><a>TV shows</a></li>
            <li><a>Movies</a></li>
            <li><a>New & Popular</a></li>
            <li><a>My list</a></li>
            <li><a>Browse by language</a></li>
            </ul>
        </div>
        <div className='flex justify-start items-center gap-4'>
            <HiOutlineSearch className='w-6 h-6'/>
            <a href='/kids'>Kids</a>
            <MdNotifications className='w-6 h-6' title='notification bell'/>
            <div className='flex items-center'>
            <div className='bg-gray-200 h-10 w-10 rounded-xl'></div>
            <div><MdArrowDropDown className='w-6 h-6'/></div>
            </div>
        </div>
        </div>
    </nav>
)
};
export default NavBar;

