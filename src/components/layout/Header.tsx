"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
    const [lang, setLang] = useState<String>('fr');
    const [isDrawerOpen, setDrawerOpen] = useState(false); // Pour gérer le drawer

    const handleLang = (selectedLang: String) => {
        setLang(selectedLang);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='fixed bg-primary h-16 w-full top-0 m-0 flex items-center justify-between p-5 z-50'>
            {/* Logo */}
            <img src="/images/header-logo.png" alt="Mon Image" className='w-auto' />

            {/* Menu Burger (visible uniquement sur mobile) */}
            <div className="lg:hidden">
                <FaBars className="text-secondary cursor-pointer hover:text-white" size={28} onClick={toggleDrawer} />
            </div>

            {/* Links section (hidden on mobile) */}
            <div className='hidden lg:flex justify-between w-96'>
                <Link href="#">
                    <div className='text-lg font-bold text-secondary opacity-90 hover:text-white'>Devenez chauffeur</div>
                </Link>
                <div className='flex items-center'>
                    <div className="relative inline-block group">
                        <Link href="#">
                            <div className='text-lg font-bold text-secondary opacity-90 hover:text-white'>À propos</div>
                        </Link>
                        {/* Dropdown */}
                        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option1</a></li>
                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option2</a></li>
                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option3</a></li>
                        </ul>
                    </div>
                    <FaChevronDown className="ml-2 mt-1" />
                </div>
                <div className='flex items-center'>
                    <div onClick={() => handleLang('fr')} className={`text-xs font-bold border border-black flex justify-center items-center ${lang === 'fr' ? 'bg-secondary text-primary' : ''} h-5 w-5 p-3 hover:cursor-pointer`}>Fr</div>
                    <div onClick={() => handleLang('en')} className={`text-xs font-bold border border-black flex justify-center items-center ${lang === 'en' ? 'bg-secondary text-primary' : ''} h-5 w-5 p-3 hover:cursor-pointer`}>En</div>
                </div>
            </div>

            {/* Drawer (visible on mobile) */}
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                    <div className="fixed top-0 left-0 w-64 h-full bg-primary p-5 z-50">
                        <FaTimes className="text-secondary cursor-pointer hover:text-white mb-5" size={28} onClick={toggleDrawer} />
                        <ul className="w-full">
                            <li className="w-full">
                                <Link href="#">
                                    <div className='text-lg font-bold text-secondary opacity-90 hover:text-white mb-4'>Devenez chauffeur</div>
                                </Link>
                            </li>
                            <li className="w-full">
                                <div className='flex items-center'>
                                    <div className="relative inline-block group">
                                        <Link href="#">
                                            <div className='text-lg font-bold text-secondary opacity-90 hover:text-white'>À propos</div>
                                        </Link>
                                        {/* Dropdown */}
                                        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block w-full]">
                                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option1</a></li>
                                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option2</a></li>
                                            <li><a className="bg-secondary text-white hover:text-primary py-2 px-4 block whitespace-no-wrap" href="#">Option3</a></li>
                                        </ul>
                                    </div>
                                    <FaChevronDown className="ml-2 mt-1" />
                                </div>
                            </li>
                            <li className="mt-4">
                                <div className='flex items-center'>
                                    <div onClick={() => handleLang('fr')} className={`text-xs font-bold border border-black flex justify-center items-center ${lang === 'fr' ? 'bg-secondary text-primary' : ''} h-5 w-5 p-3 hover:cursor-pointer`}>Fr</div>
                                    <div onClick={() => handleLang('en')} className={`text-xs font-bold border border-black flex justify-center items-center ${lang === 'en' ? 'bg-secondary text-primary' : ''} h-5 w-5 p-3 hover:cursor-pointer ml-3`}>En</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
