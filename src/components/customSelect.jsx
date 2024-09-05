import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function CustomSelect({ options, selectedOption, onChange }) {
    return (
        <div className="relative inline-block w-full md:w-64">
            <select
                className="block w-full bg-white border border-gray-300 text-[#1c2d41] text-sm font-rubik py-2 px-3 pr-8 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#5f76e8] focus:border-[#5f76e8]"
                value={selectedOption}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FiChevronDown className="text-[#1c2d41]" />
            </div>
        </div>
    );
}
