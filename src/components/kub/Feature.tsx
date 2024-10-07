"use client";

import React, { MouseEventHandler, useState } from 'react';
import { FaCalendarAlt, FaHandshake, FaKey, FaMoneyBillAlt, FaTools, FaUserTie } from 'react-icons/fa';

interface FeatureProps {
    title: string,
    description: string,
    icon: JSX.Element,
    isSelected: boolean,
    onClick: MouseEventHandler<HTMLDivElement>
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon, isSelected, onClick }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center p-5 h-40 w-64 border-2 transition-all cursor-pointer ${isSelected ? 'border-primary' : 'border-white'
                } hover:border-primary hover:bg-primary hover:bg-opacity-20`}
            onClick={onClick}
        >
            <div className={`${isSelected ? 'text-primary' : 'text-white'} text-6xl mb-4`}>{icon}</div>
            <h3 className={`${isSelected ? 'text-primary' : 'text-white'} text-base font-bold`}>{title}</h3>
            <p className={`${isSelected ? 'text-primary' : 'text-gray-400'} text-xs text-center`}>{description}</p>
        </div>
    );
};

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(0);

    const features = [
        {
            title: 'Vous avez le contrôle',
            description: 'Vous restez le propriétaire de votre véhicule.',
            icon: <FaKey />,
        },
        {
            title: 'Réservez quand vous voulez',
            description: 'Réservation en ligne 24/7.',
            icon: <FaCalendarAlt />,
        },
        {
            title: 'Un revenu stable',
            description: 'Vous gagnez un revenu chaque mois (jusqu\'à 400 000 FCFA).',
            icon: <FaMoneyBillAlt />,
        },
        {
            title: 'Engagement',
            description: 'Notre relation est encadrée par un contrat.',
            icon: <FaHandshake />,
        },
        {
            title: 'Des experts en Conduite',
            description: 'Votre voiture est conduite uniquement par des chauffeurs pros.',
            icon: <FaUserTie />,
        },
        {
            title: 'Maintenance',
            description: 'Votre véhicule est entretenu dans un garage professionnel.',
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
