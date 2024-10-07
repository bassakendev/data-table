import { FaHandshake, FaMoneyBillAlt, FaPen, FaUserFriends } from 'react-icons/fa';

const Process = () => {
    return (
        <div className="flex flex-wrap justify-center space-x-6 mt-10 opacity-95">
            {/* Step 1 */}
            <div className="relative m-3 flex flex-col items-center text-center p-6 bg-secondary border-8 border-white rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-primary text-secondary font-extrabold rounded-full mb-4 text-xl border-4 border-white">
                    1
                </div>
                <FaPen className="text-primary text-4xl mb-4" />
                <p className="text-sm font-semibold">
                    Remplissez le formulaire ci-dessous en fournissant les informations demandées et cliquez sur le bouton « Prendre rendez-vous ».
                </p>
            </div>

            {/* Step 2 */}
            <div className="relative m-3 flex flex-col items-center text-center p-6 bg-white border-8 border-primary rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-secondary text-primary font-extrabold rounded-full mb-4 text-xl border-4 border-primary">
                    2
                </div>
                <FaUserFriends className="text-primary text-4xl mb-4" />
                <p className="text-sm text-secondary font-bold">
                    Notre équipe <strong>FLEET</strong> prendra contact avec vous sous <strong>48h</strong> pour répondre à toutes vos préoccupations et signer le contrat.
                </p>
            </div>

            {/* Step 3 */}
            <div className="relative m-3 flex flex-col items-center text-center p-6 bg-secondary border-8 border-white rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-primary text-secondary font-extrabold rounded-full mb-4 text-xl border-4 border-white">
                    3
                </div>
                <FaHandshake className="text-primary text-4xl mb-4" />
                <p className="text-sm font-semibold">
                    Vous mettez la voiture à la disposition de Kub.
                </p>
            </div>

            {/* Step 4 */}
            <div className="relative m-3 flex flex-col items-center text-center p-6 bg-white border-8 border-primary rounded-full w-60 h-60 shadow-lg">
                <div className="absolute top-1 left-1 flex items-center justify-center w-14 h-14 bg-secondary text-primary font-extrabold rounded-full mb-4 text-xl border-4 border-primary">
                    4
                </div>
                <FaMoneyBillAlt className="text-primary text-4xl mb-4" />
                <p className="text-sm text-secondary font-bold">
                    Vous recevez chaque 10 du mois, votre virement bancaire mensuel.
                </p>
            </div>
        </div>
    );
};

export default Process;
