import LangProps from '@/src/props/LangProps';
import { FaCheckCircle } from 'react-icons/fa';
import AnimatedDive from '../common/AnimatedDive';


interface ServiceProps {
    title: string,
    itemsManagedByKub: any,
    itemsManagedByOwner: any,
    t: any
}

const ServiceCard: React.FC<ServiceProps> = ({ title, itemsManagedByKub, itemsManagedByOwner, t }) => {
    return (
        <div className="text-white bg-[#2e2d2c] border p-[0.35rem] w-72 mx-4">
            <div className="bg-primary text-black font-bold text-center text-5xl py-4">
                {title}
            </div>
            <div className='px-6 py-4'>
                <div className="mb-4">
                    <h3 className="font-bold mb-2 text-primary">{t('our_offer.manage_by_kub')}</h3>
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
                    <h3 className="font-bold text-primary mb-2">{t('our_offer.manage_by_owoner')}</h3>
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
                        {t('common.book_now')}
                    </button>
                </div></div>
        </div>
    );
};

const Services: React.FC<LangProps> = ({ t }) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 py-10 w-[100%] opacity-95">
            <AnimatedDive initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
                <ServiceCard
                    t={t}
                title="VIP"
                itemsManagedByKub={[
                    t('our_offer.offer_steps.monthly_emptying'),
                    t('our_offer.offer_steps.filters'),
                    t('our_offer.offer_steps.transmission'),
                    t('our_offer.offer_steps.break_pads'),
                    t('our_offer.offer_steps.gps'),
                ]}
                itemsManagedByOwner={[
                    t('our_offer.offer_steps.assurance'),
                ]}
            /></AnimatedDive>
            <AnimatedDive initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
            <ServiceCard
                    t={t}
                title="MVP"
                itemsManagedByKub={[
                    t('our_offer.offer_steps.monthly_emptying'),
                    t('our_offer.offer_steps.filters'),
                    t('our_offer.offer_steps.gps'),
                ]}
                itemsManagedByOwner={[
                    t('our_offer.offer_steps.assurance'),
                    t('our_offer.offer_steps.break_pads'),
                    t('our_offer.offer_steps.transmission'),
                ]}
            />
            </AnimatedDive>
        </div>
    );
};

export default Services;
