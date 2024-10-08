"use client";

import LangProps from '@/src/props/LangProps';
import React, { MouseEventHandler, useState } from 'react';
import { FaCalendarAlt, FaHandshake, FaKey, FaMoneyBillAlt, FaTools, FaUserTie } from 'react-icons/fa';
import AnimatedDive from '../common/AnimatedDive';

interface FeatureProps {
    title: string,
    description: string,
    icon: JSX.Element,
    isSelected: boolean,
    onClick: MouseEventHandler<HTMLDivElement>
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon, isSelected, onClick }) => {
    return (
        <AnimatedDive
        >
            <div 
            className={`flex flex-col items-center justify-center p-5 h-40 w-64 border-2 transition-all cursor-pointer ${isSelected ? 'border-primary' : 'border-white'
                } hover:border-primary hover:bg-primary hover:bg-opacity-20`}
                onClick={onClick}>
            <div className={`${isSelected ? 'text-primary' : 'text-white'} text-6xl mb-4`}>{icon}</div>
            <h3 className={`${isSelected ? 'text-primary' : 'text-white'} text-base font-bold`}>{title}</h3>
            <p className={`${isSelected ? 'text-primary' : 'text-gray-400'} text-xs text-center`}>{description}</p>
            </div>
        </AnimatedDive>
    );
};

const Features: React.FC<LangProps> = ({ t }) => {
    const [selectedFeature, setSelectedFeature] = useState(0);

    const features = [
        {
            title: t('offers.offer_1.title'),
            description: t('offers.offer_1.description'),
            icon: <FaKey />,
        },
        {
            title: t('offers.offer_2.title'),
            description: t('offers.offer_2.description'),
            icon: <FaCalendarAlt />,
        },
        {
            title: t('offers.offer_3.title'),
            description: t('offers.offer_3.description'),
            icon: <FaMoneyBillAlt />,
        },
        {
            title: t('offers.offer_4.title'),
            description: t('offers.offer_4.description'),
            icon: <FaHandshake />,
        },
        {
            title: t('offers.offer_5.title'),
            description: t('offers.offer_5.description'),
            icon: <FaUserTie />,
        },
        {
            title: t('offers.offer_6.title'),
            description: t('offers.offer_6.description'),
            icon: <FaTools />,
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-8 py-10 w-[80%]">
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    isSelected={selectedFeature === index}
                    onClick={() => setSelectedFeature(index)}
                />
            ))}
        </div>
    );
};

export default Features;
