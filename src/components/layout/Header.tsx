"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "@/src/locales/client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
    const locale = useCurrentLocale();
    const [lang, setLang] = useState<String>(locale);
    const changeLocale = useChangeLocale();
    const t = useI18n()
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleLang = (lang: string) => {
        changeLocale(lang as 'fr' | 'en')
        setLang(lang);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='fixed bg-primary h-16 w-full top-0 m-0 flex items-center justify-between p-5 z-50'>
            <img src="/images/header-logo.png" alt="Mon Image" className='w-auto' />
            <div className="lg:hidden">
                <FaBars className="text-secondary cursor-pointer hover:text-white" size={28} onClick={toggleDrawer} />
            </div>
            <div className='hidden lg:flex justify-between w-96'>
                <Link href="#">
                    <div className='text-lg font-bold text-secondary opacity-90 hover:text-white'>{t('common.become_driver')}</div>
                </Link>
                <div className='flex items-center'>
                    <div className="relative inline-block group">
                        <Link href="#">
                            <div className='text-lg font-bold text-secondary opacity-90 hover:text-white'>{t('common.about')}</div>
                        </Link>
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
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
                    <div className="fixed top-0 left-0 w-64 h-full bg-primary p-5 z-50">
                        <FaTimes className="text-secondary cursor-pointer hover:text-white mb-5" size={28} onClick={toggleDrawer} />
                        <ul className="w-full">
                            <li className="w-full">
                                <Link href="#">
                                    <div className='text-lg font-bold text-secondary opacity-90 hover:text-white mb-4'>{t('common.become_driver')}</div>
                                </Link>
                            </li>
                            <li className="w-full">
                                <div className='flex items-center'>
                                    <div className="relative inline-block group">
                                        <Link href="#">
                                            <div className='text-lg font-bold text-secondary opacity-90 hover:text-white'>{t('common.about')}</div>
                                        </Link>
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
