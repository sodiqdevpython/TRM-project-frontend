import React from 'react'

export default function DefaultButton({ icon, label, className, onClick }) {
    return (
        <div className={className}>
            <button onClick={onClick} className='hover:shadow-2xl gap-1 flex flex-row justify-between items-center p-2 bg-gradient-to-l from-[#8971ea] to-[#6176e8] shadow-lg rounded-lg text-center font-rubik text-Light transition-all duration-300'>
                {icon}
                <p className='font-rubik'>{label}</p>
            </button>
        </div>
    )
}
