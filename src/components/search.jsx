import { BsSearch } from "react-icons/bs";

export default function Search({ placeholder = "Qidirish" }) {
    return (
        <div className={`shadow-md hover:shadow-xl transition-all duration-300 hidden md:flex flex-row w-full justify-between bg-[#ffffff] px-3 py-2 rounded-full items-center font-rubik`}>
            <div className='flex-grow'>
                <input className='outline-none w-full' type="text" placeholder={placeholder} />
            </div>
            <div className='flex pe-2'>
                <button className='outline-none'><BsSearch size={22} /></button>
            </div>
        </div>
    )
}
