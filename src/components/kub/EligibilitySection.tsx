import LangProps from '@/src/props/LangProps';
import { FaKey, FaTachometerAlt } from 'react-icons/fa';
import AnimatedDiv from '../common/AnimatedDive';

const EligibilitySection: React.FC<LangProps> = ({ t }) => {
    return (
        <div className="flex flex-wrap justify-center gap-8 py-10">
            <AnimatedDiv initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} className="relative flex items-center bg-yellow-500 w-[400px] h-[150px] overflow-hidden">
                <div className="absolute top-0 right-0 w-[70%] h-full bg-secondary -skew-x-[20deg] origin-bottom-left"></div>
                <div className="relative flex items-center">
                    <div className="p-5 flex items-center justify-center z-10">
                        <FaKey size={50} />
                    </div>
                    <div className="relative z-10 text-white pl-16 text-sm text-center">
                        <p>{t('eligibility.first')}</p>
                    </div>
                </div>
            </AnimatedDiv>
            <AnimatedDiv initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className="relative flex items-center bg-yellow-500 w-[400px] h-[150px] overflow-hidden">
                <div className="absolute top-0 right-0 w-[70%] h-full bg-secondary -skew-x-[20deg] origin-bottom-left"></div>

                {/* Contenu de la carte */}
                <div className="relative flex items-center">
                    <div className="p-5 flex items-center justify-center z-10">
                        <FaTachometerAlt size={50} />
                    </div>
                    <div className="relative z-10 text-white pl-20 text-sm text-center">
                        <p>{t('eligibility.second')}</p>
                    </div>
                </div>
            </AnimatedDiv>
        </div>
    );
};

export default EligibilitySection;
