import React, { useState } from 'react';
import { logo } from './assets/idex';
import { Link } from 'react-router-dom';


// Router

import { useLocation } from 'react-router-dom';

// Router

// Content

import NotificationsDropdown from './components/notificationsDropdown';
import LanguageSelect from './components/languageSelect';
import UserDropdown from './components/userDropdown';
import SidebarItem from './components/sidebarItem';
import Search from './components/search';

// Content

// Icons

import { FaUsers } from "react-icons/fa";
import { FiHome } from 'react-icons/fi';
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";

// Icons

export default function Layout({ content: Content }) {
    const [isOpen, setIsOpen] = useState(false);

    const { pathname } = useLocation()

    return (
        <div className='flex h-screen bg-[#f9fbfd] font-rubik'>

            {/* Sidebar */}
            <aside className={`fixed z-30 inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white shadow-md w-64 md:relative md:translate-x-0`}>
                <div>
                    <img src={logo} className='w-0 lg:w-[50%] ms-[25%] mt-[5%]' alt="." />
                    <div className='flex justify-between items-center md:hidden'>
                        <button onClick={() => setIsOpen(false)}>
                            <MdOutlineMenuOpen color={'#7c8798'} size={48} />
                        </button>
                    </div>
                    <div className='mt-[15%]'>
                        <div className='w-[95%] rounded-r-full hover:shadow-2xl transition-all duration-300'>
                            <Link to={'/dashboard'}>
                                <SidebarItem icon={FiHome} text='Umumiy' isActive={pathname === '/dashboard'} />
                            </Link>
                        </div>
                        <div className='w-[95%] rounded-r-full hover:shadow-2xl transition-all duration-300'>
                            <Link to={'/users-list'}>
                                <SidebarItem icon={FaUsers} text="Foydalanuvchilar" isActive={pathname === '/users-list'} />
                            </Link>
                        </div>
                        <div className='w-[95%] rounded-r-full hover:shadow-2xl transition-all duration-300'>
                            <Link to={'/organizations-list'}>
                                <SidebarItem icon={MdAddHomeWork} text="Muassasalar" isActive={pathname === '/organizations-list'} />
                            </Link>
                        </div>
                        <p className='ms-[12%] mt-[5%] text-xl'>Maktablar</p>
                        <div className=' w-[95%] rounded-r-full hover:shadow-2xl transition-all duration-700 mt-5'>
                            <Link to={'/rated-school'}>
                                <SidebarItem icon={FaSchoolCircleCheck} text='Baholanganlar' isActive={pathname === '/rated-school'} />
                            </Link>
                        </div>
                    </div>
                    {/* Menu items here */}
                </div>
            </aside>

            <div className='flex flex-1 flex-col'>

                {/* Navbar */}
                <nav className='flex items-center justify-between w-full h-20 bg-[#f9fbfd] px-6 shadow-2xl md:shadow-none border-b'>
                    <div className='flex flex-row items-center justify-between'>
                        <NotificationsDropdown />
                        <div className='ms-5'>
                            <LanguageSelect />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div>
                            <Search />
                        </div>
                        <UserDropdown />
                    </div>
                    <button
                        className='md:hidden text-gray-600 focus:outline-none'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className='w-8 h-8'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'
                            ></path>
                        </svg>
                    </button>
                </nav>

                {/* Main Content */}
                <main className='p-6 overflow-x-auto'>
                    <Content />
                </main>

            </div>

        </div>
    );
}
