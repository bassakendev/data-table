"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Importer le style
import AnimatedDiv from "../common/AnimatedDive";

const CarouselSection = () => {
    const slides = [
        { id: 1, name: 'Traoré', comment: "Equipe très professionnelle et diligente. Déjà une voiture en gestion chez vous. J’envisage d’en ajouter une dans quelques mois. Félicitations pour ce que vous faites." },
        { id: 2, name: 'Cebastien', comment: "Equipe très professionnelle et diligente. Déjà une voiture en gestion chez vous. J’envisage d’en ajouter une dans quelques mois. Félicitations pour ce que vous faites." },
        { id: 3, name: 'Garfild', comment: "Equipe très professionnelle et diligente. Déjà une voiture en gestion chez vous. J’envisage d’en ajouter une dans quelques mois. Félicitations pour ce que vous faites." },
    ];

    return (
        <AnimatedDiv className="w-full mt-5">
            <AliceCarousel
                items={slides.map(slide => (
                    <div key={slide.id} className="bg-customgray flex flex-col items-center text-white p-6 cursor-pointer">
                        <div className="text-xl text-center">
                            “{slide.comment}”
                        </div>
                        <div className="font-bold text-2xl mt-3">{slide.name}</div>
                    </div>
                ))}
                autoPlay
                autoPlayInterval={4000}
                mouseTracking={true}
                infinite
                disableButtonsControls
                disableDotsControls={false}
                responsive={{
                    0: { items: 1 },
                    1024: { items: 1 },
                }}
            />
        </AnimatedDiv>
    );
};

export default CarouselSection;
