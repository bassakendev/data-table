import Features from "@/src/components/kub/Feature";
import Process from "@/src/components/kub/Process";
import Services from "@/src/components/kub/ServiceCard";
import Header from "@/src/components/layout/Header";
import Image from 'next/image';

export default function Kub() {
    return (
        <div className="">
            <Header></Header>
            <div className="relative w-full mt-14 bg-[url('/images/img110.jpg')] bg-no-repeat bg-center bg-cover" style={{ height: 'calc(100svh - 4rem)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute bottom-32 left-32">
                    <div className="w-full text-white">
                        <div className='text-6xl font-extrabold tracking-wide'>Faites de votre voiture</div>
                        <div className='text-5xl font-extrabold tracking-wide'>une source de revenu <span className="text-primary">mensuel</span></div>
                        <div className='text-xl mt-4'>Gagnez jusqu’à 350 000 FCFA/mois en mettant votre voiture en gestion VTC</div>
                    </div>
                    <div className="border border-white text-white text-center w-52 p-2 hover:cursor-pointer hover:bg-primary hover:border-primary mt-6 font-bold">
                        Réservez Maintenant
                    </div>
                </div>
            </div>
            <div className="w-full p-16 flex flex-col items-center my-2 bg-tertiary">
                <div className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>NOS OPTIONS</div>
                <div className='text-5xl tracking-wide opacity-85'>2 Options <span className="text-secondary font-extrabold">d’Eligibilité</span></div>
                <div className="flex justify-evenly flex-wrap w-full mt-12">
                    <Image
                        src="/images/have_vehicle_1.png"
                        alt="Exemple d'image"
                        className="m-5"
                        width={350}
                        height={200}
                    />
                    <Image
                        src="/images/have_vehicle_2.png"
                        alt="Exemple d'image"
                        className="m-5"
                        width={380}
                        height={210}
                    />
                </div>
            </div>
            <div className="w-full p-16 flex flex-col items-center bg-secondary text-white my-2">
                <div className='text-base font-bold tracking-[0.25em] opacity-40 mb-3 text-primary'>L'OFFRE</div>
                <div className='text-5xl tracking-wide opacity-85'>Quelques avantages <span className="font-extrabold">de l’offre Kub</span></div>
                <Features></Features>
            </div>
            <div className="relative w-full p-16 bg-[url('/images/img80.jpg')] bg-no-repeat bg-center bg-cover my-2">
                <div className="absolute inset-0 bg-white bg-opacity-80"></div>
                <div className="flex flex-col items-center z-50">
                    <div className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>NOTRE OFFRE</div>
                    <div className='text-5xl tracking-wide opacity-85'>Nos options de <span className="text-secondary font-extrabold">gain mensuel</span></div>
                    <div className='text-lg mt-4 font-semibold opacity-85'>02 options de gains mensuels vous sont proposés. Choisissez celle qui vous convient le mieux</div>
                    <Services></Services>
                </div>
            </div>
            <div className="relative w-full p-16 bg-primary my-2">
                <div className="flex flex-col items-center z-50">
                    <div className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>NOTRE SELECTION</div>
                    <div className='text-5xl tracking-wide opacity-85'>Nos marques de <span className="text-secondary font-extrabold">voitures éligibles</span></div>
                    <div className='text-lg mt-1 font-semibold opacity-85'>Découvrez les marques de voitures acceptées par Kub</div>
                </div>
                <div className="flex flex-wrap mt-8 justify-center">
                    <div className="relative mr-1">
                        <div className="absolute text-primary text-sm px-6 py-1 rounded-md top-5 -right-3 bg-secondary w-auto z-50 shadow-xl">Suzuki Dzire</div>
                        <Image
                            src="/images/img33.jpg"
                            alt="Exemple d'image"
                            width={310}
                            height={280}
                        />
                    </div>
                    <div className="relative mr-1">
                        <div className="absolute text-primary text-sm px-6 py-1 rounded-md top-5 -right-3 bg-secondary w-auto z-50 shadow-xl">Suzuki Swift</div>
                        <Image
                            src="/images/img34.jpg"
                            alt="Exemple d'image"
                            width={310}
                            height={280}
                        />
                    </div>
                    <div className="relative mr-1">
                        <div className="absolute text-primary text-sm px-6 py-1 rounded-md top-5 -right-3 bg-secondary w-auto z-50 shadow-xl">Suzuki Spresso</div>
                        <Image
                            src="/images/img33.jpg"
                            alt="Exemple d'image"
                            width={310}
                            height={280}
                        />
                    </div>
                </div>
            </div>
            <div className="relative w-full p-16 bg-[url('/images/img82.jpg')] bg-no-repeat bg-center bg-cover  my-2">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="flex flex-col items-center z-50 text-white">
                    <div className='text-base font-bold tracking-[0.25em] opacity-40 mb-3 text-primary'>NOTRE PROCESS</div>
                    <div className='text-5xl tracking-wide opacity-85'>Comment ça  <span className="font-extrabold">marche</span></div>
                    <div className='text-sm mt-4 font-semibold opacity-95'>La procédure de mise en service de votre véhicule est facile et simple</div>
                    <Process></Process>
                </div>
            </div>
            <div className="relative w-full p-16 bg-[url('/images/img33.jpg')] bg-no-repeat bg-center bg-cover my-2">
                <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
                <div className="flex flex-col items-center z-50">
                    <div className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>CONTACT</div>
                    <div className='text-5xl tracking-wide opacity-85'>Vous y <span className="text-secondary font-extrabold">êtes !!!</span></div>
                    <div className='text-lg mt-4 font-semibold opacity-85 w-[60%] text-center'>Gagnez des revenus fixes mensuels avec votre véhicule.
                        Vous pouvez confier en gestion à Kub, autant de voitures que vous le souhaitez</div>
                    <div className='text-lg mt-5 font-semibold opacity-85'>Allons-y</div>
                    <div className="w-[70%] opacity-95 m-3">
                        <select name="civility" className="bg-secondary w-full outline-none h-10 text-white px-4">
                            <option className="text-white hover:bg-primary" key="civilité">Civilité</option>
                            <option className="text-white hover:bg-primary" key="Location">Marié</option>
                            <option className="text-white hover:bg-primary" value="2" key="Célibataire">Célibataire</option>
                            <option className="text-white hover:bg-primary" value="3" key="Veuve">Veuve</option>
                            <option className="text-white hover:bg-primary" value="4" key="Common-law spouse">Common-law spouse</option>
                        </select>
                        <div className="flex justify-between mt-2">
                            <input type="text" name="first_name" id="" className="bg-secondary w-[49%] h-10 text-white px-4 outline-none" placeholder="Nom" />
                            <input type="text" name="last_name" id="" className="bg-secondary w-[49%] h-10 px-4 outline-none" placeholder="prénom" />
                        </div>
                        <div className="flex justify-between mt-2">
                            <input type="text" name="phone" id="" className="bg-secondary w-[49%] h-10 text-white px-4 outline-none" placeholder="Numéro de téléphone" />
                            <input type="text" name="email" id="" className="bg-secondary w-[49%] h-10 px-4 outline-none" placeholder="Adresse Mail" />
                        </div>
                        <div className="flex justify-between mt-2">
                            <select name="car_brand" className="bg-secondary w-[49%] outline-none h-10 text-white px-4">
                                <option className="text-white hover:bg-primary" key="civilité">Marque de voiture</option>
                                <option className="text-white hover:bg-primary" key="Toyota">Toyota</option>
                                <option className="text-white hover:bg-primary" value="2" key="VMW">VMW</option>
                                <option className="text-white hover:bg-primary" value="3" key="Rolls-Royce">Rolls-Royce</option>
                                <option className="text-white hover:bg-primary" value="4" key="Citroën">Citroën</option>
                            </select>  <select name="civility" className="bg-secondary outline-none h-10 text-white px-4 w-[49%]">
                                <option className="text-white hover:bg-primary" key="civilité">Option de Gain</option>
                                <option className="text-white hover:bg-primary" key="Marié">Location</option>
                                <option className="text-white hover:bg-primary" value="2" key="Transport">Transport</option>
                                <option className="text-white hover:bg-primary" value="3" key="Vente-directe">Vente directe</option>
                                <option className="text-white hover:bg-primary" value="4" key="Autres">Autres</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-4">
                            <div className="text-white border p-2 border-white bg-secondary hover:bg-white hover:text-primary hover:cursor-pointer">Réservez Maintenant</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full p-16 flex flex-col items-center my-2 bg-tertiary">
                <div className="absolute flex -top-16 left-36 -rotate-[20deg] opacity-55">
                    <div className="h-32 w-9 bg-customgray mr-3"></div>
                    <div className="h-32 w-9 bg-customgray"></div>

                </div>
                <div className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>COMMENTAIRE</div>
                <div className='text-5xl tracking-wide opacity-85'>Ce qu’ils disent de <span className="text-secondary font-extrabold">kub</span></div>
                <div className="flex justify-evenly flex-wrap w-full mt-12">
                    <div className="bg-customgray flex flex-col items-center text-white p-6 w-[80%]">
                        <div className="text-xl text-center">
                            “Equipe très professionnelle et diligente. Déjà une voiture en gestion chez vous. J’envisage
                            d’en ajouter une dans quelques mois. Félicitations pour ce que vous faites.”
                        </div>
                        <div className="font-bold text-2xl mt-3">Traoré</div>
                    </div>
                </div>
            </div>
        </div >
    );
}