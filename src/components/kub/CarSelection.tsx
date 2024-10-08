import Image from 'next/image';
import AnimatedDive from "../common/AnimatedDive";

const CarSelection = () => {
    return (
        <div className="flex flex-wrap mt-8 justify-center">
            <AnimatedDive initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <div className="relative mr-1 mt-1">
                    <div className="absolute text-primary text-sm px-6 py-1 rounded-md top-5 -right-3 bg-secondary w-auto z-50 shadow-xl">Suzuki Dzire</div>
                    <Image
                        src="/images/img33.jpg"
                        alt="Exemple d'image"
                        width={310}
                        height={280}
                    /></div>
            </AnimatedDive>
            <AnimatedDive initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="relative mr-1 mt-1">
                    <div className="absolute text-primary text-sm px-6 py-1 rounded-md top-5 -right-3 bg-secondary w-auto z-50 shadow-xl">Suzuki Swift</div>
                    <Image
                        src="/images/img34.jpg"
                        alt="Exemple d'image"
                        width={310}
                        height={280}
                    />
                </div>
            </AnimatedDive>
            <AnimatedDive initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
                <div className="relative mr-1 mt-1">
                    <div className="absolute text-primary text-sm px-6 py-1 rounded-md top-5 -right-3 bg-secondary w-auto z-50 shadow-xl">Suzuki Spresso</div>
                    <Image
                        src="/images/img33.jpg"
                        alt="Exemple d'image"
                        width={310}
                        height={280}
                    />
                </div>
            </AnimatedDive>
        </div>
    );
};

export default CarSelection;
