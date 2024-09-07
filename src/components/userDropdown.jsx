import React, { useState } from 'react';
import { FiUser, FiPower } from 'react-icons/fi';
import { defaultUser } from '../assets/idex';

const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative nav-item dropdown hidden md:block ms-2">
            <button
                className="nav-link flex items-center focus:outline-none"
                onClick={toggleDropdown}
            >
                <img
                    src={defaultUser}
                    alt="user"
                    className="rounded-full"
                    width="40"
                />
                <span className="ml-2 hidden lg:inline-block">
                    <span className="text-dark font-rubik">Otaxon Faxriddinovich</span>
                </span>
            </button>

            {isOpen && (
                <div className="dropdown-menu-right absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20 animated flipInY">
                    <button
                        className="dropdown-item flex items-center p-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full text-left"
                        onClick={() => console.log('Mening profilim clicked')}
                    >
                        <FiUser className="svg-icon mr-2 ml-1" />
                        Mening profilim
                    </button>
                    <div className="dropdown-divider border-t border-gray-200 my-2"></div>
                    {/* <button
                        className="dropdown-item flex items-center p-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full text-left"
                        onClick={() => console.log('Sozlamalari clicked')}
                    >
                        <FiSettings className="svg-icon mr-2 ml-1" />
                        Sozlamalari
                    </button>
                    <div className="dropdown-divider border-t border-gray-200 my-2"></div> */}
                    <button
                        className="dropdown-item flex items-center p-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full text-left"
                        onClick={() => console.log('Chiqish clicked')}
                    >
                        <FiPower className="svg-icon mr-2 ml-1" />
                        Chiqish
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
