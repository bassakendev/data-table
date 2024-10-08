import LangProps from '@/src/props/LangProps';
import { FaHandshake, FaMoneyBillAlt, FaPen, FaUserFriends } from 'react-icons/fa';
import AnimatedDive from '../common/AnimatedDive';

const Process: React.FC<LangProps> = ({ t }) => {
    return (
        <div className="flex flex-wrap justify-center space-x-6 mt-10 opacity-95">
            {/* Step 1 */}
            <AnimatedDive initial={{ opacity: 0, y: 200, x: 200 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.8 }} className="relative m-3 flex flex-col items-center text-center p-6 bg-secondary border-8 border-white rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-primary text-secondary font-extrabold rounded-full mb-4 text-xl border-4 border-white">
                    1
                </div>
                <FaPen className="text-primary text-4xl mb-4" />
                <p className="text-sm font-semibold">
                    {t('our_process.complete_form')}
                </p>
            </AnimatedDive>

            {/* Step 2 */}
            <AnimatedDive initial={{ opacity: 0, y: -200, x: -200 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1 }} className="relative m-3 flex flex-col items-center text-center p-6 bg-white border-8 border-primary rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-secondary text-primary font-extrabold rounded-full mb-4 text-xl border-4 border-primary">
                    2
                </div>
                <FaUserFriends className="text-primary text-4xl mb-4" />
                <p className="text-sm text-secondary font-bold">
                    {t('our_process.our_team')}
                </p>
            </AnimatedDive>

            {/* Step 3 */}
            <AnimatedDive initial={{ opacity: 0, y: 200, x: 200 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 0.9 }} className="relative m-3 flex flex-col items-center text-center p-6 bg-secondary border-8 border-white rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-primary text-secondary font-extrabold rounded-full mb-4 text-xl border-4 border-white">
                    3
                </div>
                <FaHandshake className="text-primary text-4xl mb-4" />
                <p className="text-sm font-semibold">
                    {t('our_process.kub_disposal')}
                </p>
            </AnimatedDive>

            {/* Step 4 */}
            <AnimatedDive initial={{ opacity: 0, y: -200, x: -200 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: 1.1 }} className="relative m-3 flex flex-col items-center text-center p-6 bg-white border-8 border-primary rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-secondary text-primary font-extrabold rounded-full mb-4 text-xl border-4 border-primary">
                    4
                </div>
                <FaMoneyBillAlt className="text-primary text-4xl mb-4" />
                <p className="text-sm text-secondary font-bold">
                    {t('our_process.receive')}
                </p>
            </AnimatedDive>
        </div>
    );
};

export default Process;
