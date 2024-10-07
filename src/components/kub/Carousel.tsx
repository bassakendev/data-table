
import Slider from "react-slick";

const CarouselSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slides = [
        { id: 1, name: 'Traoré', comment: "“Equipe très professionnelle et diligente. Déjà une voiture en gestion chez vous. J’envisage d’en ajouter une dans quelques mois. Félicitations pour ce que vous faites.”", },
        { id: 2, name: 'Cebastien', comment: "“Equipe très professionnelle et diligente. Déjà une voiture en gestion chez vous. J’envisage d’en ajouter une dans quelques mois. Félicitations pour ce que vous faites.”", },
        { id: 3, name: 'Garfild', comment: "“Equipe très professionnelle et diligente. Déjà une voiture en gestion chez vous. J’envisage d’en ajouter une dans quelques mois. Félicitations pour ce que vous faites.”", },
    ];

    return (
        <div className="w-full max-w-xl mx-auto">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div className="bg-customgray flex flex-col items-center text-white p-6 w-[80%]">
                        <div key={slide.id} className="relative bg-customgray flex flex-col items-center text-white p-6 w-[80%]">
                            <div className="text-xl text-center">
                                {slide.comment}
                            </div>
                            <div className="font-bold text-2xl mt-3">{slide.name}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselSection;
