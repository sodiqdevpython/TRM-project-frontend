import React, { useState } from 'react';
import { FiBell, FiAirplay } from 'react-icons/fi';

const NotificationsDropdown = ({ number = 1 }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative p-5">
            <button
                className="relative focus:outline-none"
                onClick={toggleDropdown}
            >
                <FiBell className="text-2xl" />
                <span className="absolute -right-5 bottom-3 inline-flex items-center justify-center px-2 bg-blue-500 text-white rounded-xl text-xs border bg-[#6576e9]">
                    {number}
                </span>
            </button>

            {isOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                    <ul className="list-none p-2">
                        <li className="border-b border-gray-200">
                            <div className="flex items-center p-2">
                                <div className="bg-red-500 p-2 rounded-full">
                                    <FiAirplay className="text-white" />
                                </div>
                                <div className="ml-3">
                                    <h6 className="font-rubik text-sm font-semibold">Bildirishnoma</h6>
                                    <p className="text-xs text-gray-600">Bildirishnoma orqali adminga murojat!</p>
                                    <span className="text-xs text-gray-500">9:30</span>
                                </div>
                            </div>
                        </li>
                        <li className="text-center pt-2">
                            <p className="text-sm text-blue-500 font-rubik">
                                <button>Hamma bildirishnomalarni ko'rish</button>
                            </p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NotificationsDropdown;
