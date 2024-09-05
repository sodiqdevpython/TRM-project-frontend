import React from 'react';

const SidebarItem = ({ text, isActive = false, icon: Icon }) => {

    return (
        <div className={`w-full ${isActive ? "text-[#fff] bg-gradient-to-l to-[#8971ea] from-[#6076e8]" : "hover:bg-gradient-to-l to-[#8971ea] from-[#6076e8] text-[#818181] hover:text-[#fff]"} py-1 sidebar-item rounded-r-full`}>
            <div
                className="flex items-center p-2 transition-colors duration-200 rounded-3xl"
                aria-expanded="false"
            >
                <div className='flex flex-row items-center ms-[10%]'>
                    {<Icon className="mr-3 text-lg" />}
                    <span className="hide-menu font-rubik text-lg">{text}</span>
                </div>
            </div>
        </div>
    );
};

export default SidebarItem;
