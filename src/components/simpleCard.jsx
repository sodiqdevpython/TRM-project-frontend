import React from 'react';

export default function SimpleCard({ number, fullNumber, name }) {
    return (
        <div className='w-full md:w-[25%] bg-[#ffffff] font-rubik px-4 md:px-6 shadow-lg rounded-md py-4 hover:cursor-pointer hover:shadow-2xl transition-all duration-300 flex-wrap'>
            <div className='flex flex-row items-center'>
                <h2 className='text-2xl md:text-4xl text-[#1c2d41]'>{number}</h2>
                <div className='px-1 ms-1 font-rubik bg-[#5f76e8] rounded-xl'>
                    <p className='text-[#fff] text-xs p-1'>Jami {fullNumber}</p>
                </div>
            </div>
            <p className='text-xs md:text-sm text-[#9eabc0]'>{name}</p>
        </div>
    );
}
