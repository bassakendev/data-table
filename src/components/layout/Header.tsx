"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Header: React.FC = () => {
    const [lang, setLang] = useState<String>('fr');

    const handleLang = (selectedLang: String) => {
        setLang(selectedLang);
        useEffect(() => { });
    }

    return (
        <div className='fixed bg-primary h-16 w-full top-0 m-0 flex items-center justify-around p-5 z-50' >
            <img src="/images/header-logo.png" alt="Mon Image" className='w-auto' />
            <div className='flex justify-between w-96'>
                <Link href="#">
                    <div className='text-xl font-bold text-secondary opacity-80 hover:text-white'>Devenez chauffeur</div>
                </Link>
                <div className='flex items-center'>
                    <div className='class="relative inline-block group'>
                        <Link href="#" >
                            <div className='text-xl font-bold text-secondary opacity-80 hover:text-white'>A propos</div>
                        </Link>
                        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option 1</a></li>
                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option 2</a></li>
                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option 3</a></li>
                        </ul>
                    </div>
                    <FaChevronDown className="ml-2 mt-1"></FaChevronDown>
                </div>
                <div className='flex items-center'>
                    <div onClick={() => handleLang('fr')} className={`border border-black flex justify-center items-center ${lang === 'fr' ? 'bg-secondary text-primary' : ''} h-5 w-5 p-3 hover:cursor-pointer`}
                    >Fr</div>
                    <div onClick={() => handleLang('en')} className={`border border-black flex justify-center items-center ${lang === 'en' ? 'bg-secondary text-primary' : ''} h-5 w-5 p-3 hover:cursor-pointer`}>En</div>
                </div>
            </div>
        </div >)
};

export default Header;
