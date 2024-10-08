import AnimatedDive from "@/src/components/common/AnimatedDive";
import CarouselSection from "@/src/components/kub/CarouselSection";
import CarSelection from "@/src/components/kub/CarSelection";
import EligibilitySection from "@/src/components/kub/EligibilitySection";
import Features from "@/src/components/kub/Feature";
import Form from "@/src/components/kub/Form";
import Process from "@/src/components/kub/Process";
import Services from "@/src/components/kub/ServiceCard";
import Header from "@/src/components/layout/Header";

export default function Kub() {

    return (
        <div className="">
            <Header></Header>
            <div className="lg:relative flex flex-col items-center justify-center w-full mt-16 bg-[url('/images/img110.jpg')] bg-no-repeat bg-start bg-cover" style={{ height: 'calc(100svh - 4rem)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="lg:absolute lg:bottom-32 lg:left-32 flex flex-col items-center justify-center lg:text-justify text-center p-5">
                    <div className="text-white">
                        <AnimatedDive transition={{ duration: 0.7 }} className='text-4xl md:text-6xl font-extrabold tracking-wide'>
                            Faites de votre voiture
                        </AnimatedDive>
                        <AnimatedDive transition={{ duration: 0.8 }} className='text-3xl md:text-5xl font-extrabold tracking-wide'>
                            une source de revenu <span className="text-primary">mensuel</span>
                        </AnimatedDive>
                        <AnimatedDive className='text-lg md:text-xl mt-4'>
                            Gagnez jusqu’à 350 000 FCFA/mois en mettant votre voiture en gestion VTC
                        </AnimatedDive>
                    </div>
                    <AnimatedDive transition={{ duration: 1 }} className="lg:self-start border border-white text-white text-center w-52 p-2 hover:cursor-pointer hover:bg-primary hover:border-primary mt-6 font-bold">
                        Réservez Maintenant
                    </AnimatedDive>
                </div>
            </div>
            <div className="w-full p-16 flex flex-col items-center my-2 bg-tertiary text-center">
                <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>NOS OPTIONS</AnimatedDive>
                <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>2 Options <span className="text-secondary font-extrabold">d’Eligibilité</span></AnimatedDive>
                <EligibilitySection></EligibilitySection>
            </div>
            <div className="w-full p-16 flex flex-col items-center bg-secondary text-white my-2 text-center">
                <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3 text-primary'>L'OFFRE</AnimatedDive>
                <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>Quelques avantages <span className="font-extrabold">de l’offre Kub</span></AnimatedDive>
                <Features></Features>
            </div>
            <div className="relative w-full p-16 bg-[url('/images/img80.jpg')] bg-no-repeat bg-center bg-cover my-2 text-center">
                <div className="absolute inset-0 bg-white bg-opacity-80"></div>
                <div className="flex flex-col items-center z-50">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>NOTRE OFFRE</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>Nos options de <span className="text-secondary font-extrabold">gain mensuel</span></AnimatedDive>
                    <AnimatedDive className='text-lg mt-4 font-semibold opacity-85'>02 options de gains mensuels vous sont proposés. Choisissez celle qui vous convient le mieux</AnimatedDive>
                    <Services></Services>
                </div>
            </div>
            <div className="relative w-full p-16 bg-primary my-2 text-center">
                <div className="flex flex-col items-center z-50">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>NOTRE SELECTION</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>Nos marques de <span className="text-secondary font-extrabold">voitures éligibles</span></AnimatedDive>
                    <AnimatedDive className='text-lg mt-1 font-semibold opacity-85'>Découvrez les marques de voitures acceptées par Kub</AnimatedDive>
                </div>
                <CarSelection></CarSelection>
            </div>
            <div className="relative w-full p-16 bg-[url('/images/img82.jpg')] bg-no-repeat bg-center bg-cover  my-2 text-center">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="flex flex-col items-center z-50 text-white">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3 text-primary'>NOTRE PROCESS</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>Comment ça  <span className="font-extrabold">marche</span></AnimatedDive>
                    <AnimatedDive className='text-sm mt-4 font-semibold opacity-95'>La procédure de mise en service de votre véhicule est facile et simple</AnimatedDive>
                    <Process></Process>
                </div>
            </div>
            <div className="relative w-full lg:p-16 p-3 bg-[url('/images/img33.jpg')] bg-no-repeat bg-center bg-cover my-2">
                <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
                <div className="flex flex-col items-center z-50">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>CONTACT</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>Vous y <span className="text-secondary font-extrabold">êtes !!!</span></AnimatedDive>
                    <AnimatedDive className='text-lg mt-4 font-semibold opacity-85 w-[60%] text-center'>Gagnez des revenus fixes mensuels avec votre véhicule.
                        Vous pouvez confier en gestion à Kub, autant de voitures que vous le souhaitez</AnimatedDive>
                    <AnimatedDive transition={{ duration: 1 }} className='text-lg mt-5 font-semibold opacity-85'>Allons-y</AnimatedDive>
                    <Form></Form>
                </div>
            </div>
            <div className="relative w-full lg:p-16 p-3 flex flex-col items-center my-2 bg-tertiary">
                <div className="hidden lg:absolute lg:flex lg:-top-16 lg:left-36 -rotate-[20deg] opacity-55">
                    <AnimatedDive initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="h-32 w-9 bg-customgray mr-3"></AnimatedDive>
                    <AnimatedDive initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="h-32 w-9 bg-customgray"></AnimatedDive>
                </div>
                <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>COMMENTAIRE</AnimatedDive>
                <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-55s'>Ce qu’ils disent de <span className="text-secondary font-extrabold">kub</span></AnimatedDive>
                <CarouselSection></CarouselSection>
            </div>
        </div >
    );
}