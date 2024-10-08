import { FaCheckCircle } from 'react-icons/fa';
import AnimatedDive from '../common/AnimatedDive';


interface ServiceProps {
    title: string,
    itemsManagedByKub: any,
    itemsManagedByOwner: any,
}

const ServiceCard: React.FC<ServiceProps> = ({ title, itemsManagedByKub, itemsManagedByOwner }) => {
    return (
        <div className="text-white bg-[#2e2d2c] border p-[0.35rem] w-72 mx-4">
            <div className="bg-primary text-black font-bold text-center text-5xl py-4">
                {title}
            </div>
            <div className='px-6 py-4'>
                <div className="mb-4">
                    <h3 className="font-bold mb-2 text-primary">Géré par kub</h3>
                    <ul className="space-y-2 text-sm">
                        {itemsManagedByKub.map((item: any, index: number) => (
                            <li key={index} className="flex items-center">
                                <FaCheckCircle className="text-primary mr-2 text-sm" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="font-bold text-primary mb-2">Gérés par le propriétaire</h3>
                    <ul className="space-y-2 text-sm">
                        {itemsManagedByOwner.map((item: any, index: number) => (
                            <li key={index} className="flex items-center">
                                <FaCheckCircle className="text-primary mr-2 text-sm" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-center my-5">
                    <button className="hover:bg-primary border border-primary text-primary font-bold py-2 px-4 hover:text-white transition">
                        Réservez Maintenant
                    </button>
                </div></div>
        </div>
    );
};

const Services = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8 py-10 w-[100%] opacity-95">
            <AnimatedDive initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}><ServiceCard
                title="VIP"
                itemsManagedByKub={[
                    "Vidange mensuelle",
                    "Remplacement des filtres",
                    "Entretien de la transmission et de la distribution",
                    "Remplacement des plaquettes de freins",
                    "Installation GPS",
                ]}
                itemsManagedByOwner={[
                    "Assurance et vignette",
                ]}
            /></AnimatedDive>
            <AnimatedDive initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
            <ServiceCard
                title="MVP"
                itemsManagedByKub={[
                    "Vidange mensuelle",
                    "Remplacement des filtres",
                    "Installation GPS",
                ]}
                itemsManagedByOwner={[
                    "Assurance et vignette",
                    "Remplacement des plaquettes de freins",
                    "Entretien de la transmission et de la distribution",
                ]}
            />
            </AnimatedDive>
        </div>
    );
};

export default Services;
