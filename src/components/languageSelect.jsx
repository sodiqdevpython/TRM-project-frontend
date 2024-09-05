import React from 'react';

const LanguageSelect = () => {
    return (
        <div className="customize-input hover:shadow-2xl transition-all duration-300">
            <select
                className="text-[#b8c3d5] px-4 rounded-lg shadow-sm border-none p-2 focus:outline-none font-rubik"
            >
                <option value="1">O'zbekcha</option>
                <option value="2">Ruscha</option>
            </select>
        </div>
    );
};

export default LanguageSelect;
