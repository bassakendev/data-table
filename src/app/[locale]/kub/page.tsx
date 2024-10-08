"use client"

import AnimatedDive from "@/src/components/common/AnimatedDive";
import CarouselSection from "@/src/components/kub/CarouselSection";
import CarSelection from "@/src/components/kub/CarSelection";
import EligibilitySection from "@/src/components/kub/EligibilitySection";
import Features from "@/src/components/kub/Feature";
import Form from "@/src/components/kub/Form";
import Process from "@/src/components/kub/Process";
import Services from "@/src/components/kub/ServiceCard";
import Header from "@/src/components/layout/Header";
import { useI18n } from "@/src/locales/client";

export default function Kub() {
    const t = useI18n()

    return (
        <div className="">
            <Header></Header>
            <div className="lg:relative flex flex-col items-center justify-center w-full mt-16 bg-[url('/images/img110.jpg')] bg-no-repeat bg-start bg-cover" style={{ height: 'calc(100svh - 4rem)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="lg:absolute lg:bottom-32 lg:left-32 flex flex-col items-center justify-center lg:text-justify text-center p-5">
                    <div className="text-white">
                        <AnimatedDive transition={{ duration: 0.7 }} className='text-4xl md:text-6xl font-extrabold tracking-wide'>
                            {t('header.make_your_choice')}
                        </AnimatedDive>
                        <AnimatedDive transition={{ duration: 0.8 }} className='text-3xl md:text-5xl font-extrabold tracking-wide'>
                            {t('header.income_source')} <span className="text-primary">{t('header.monthly')}</span>
                        </AnimatedDive>
                        <AnimatedDive className='text-lg md:text-xl mt-4'>
                            {t('header.earn_up')}
                        </AnimatedDive>
                    </div>
                    <AnimatedDive transition={{ duration: 1 }} className="lg:self-start border border-white text-white text-center w-52 p-2 hover:cursor-pointer hover:bg-primary hover:border-primary mt-6 font-bold">
                        {t('common.book_now')}
                    </AnimatedDive>
                </div>
            </div>
            <div className="w-full p-16 flex flex-col items-center my-2 bg-tertiary text-center">
                <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>{t('eligibility.title')}</AnimatedDive>
                <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>{t('eligibility.two_options')} <span className="text-secondary font-extrabold">{t('eligibility.eligibility')}</span></AnimatedDive>
                <EligibilitySection t={t} ></EligibilitySection>
            </div>
            <div className="w-full p-16 flex flex-col items-center bg-secondary text-white my-2 text-center">
                <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3 text-primary'>{t('offers.tittle')}</AnimatedDive>
                <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>{t('offers.some_advantages')} <span className="font-extrabold">{t('offers.of_offers')}</span></AnimatedDive>
                <Features t={t}></Features>
            </div>
            <div className="relative w-full p-16 bg-[url('/images/img80.jpg')] bg-no-repeat bg-center bg-cover my-2 text-center">
                <div className="absolute inset-0 bg-white bg-opacity-80"></div>
                <div className="flex flex-col items-center z-50">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>{t('our_offer.title')}</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>{t('our_offer.our_options')} <span className="text-secondary font-extrabold">{t('our_offer.monthly_income')}</span></AnimatedDive>
                    <AnimatedDive className='text-lg mt-4 font-semibold opacity-85'>{t('our_offer.two_options')}</AnimatedDive>
                    <Services t={t}></Services>
                </div>
            </div>
            <div className="relative w-full p-16 bg-primary my-2 text-center">
                <div className="flex flex-col items-center z-50">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>{t('our_selection.title')}</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>{t('our_selection.our_brand')} <span className="text-secondary font-extrabold">{t('our_selection.eligible_cars')}</span></AnimatedDive>
                    <AnimatedDive className='text-lg mt-1 font-semibold opacity-85'>{t('our_selection.explore_brands')}</AnimatedDive>
                </div>
                <CarSelection></CarSelection>
            </div>
            <div className="relative w-full p-16 bg-[url('/images/img82.jpg')] bg-no-repeat bg-center bg-cover  my-2 text-center">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="flex flex-col items-center z-50 text-white">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3 text-primary'>{t('our_process.title')}</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>{t('our_process.how_so')}  <span className="font-extrabold">{t('our_process.works')}</span></AnimatedDive>
                    <AnimatedDive className='text-sm mt-4 font-semibold opacity-95'>{t('our_process.service_procedure')}</AnimatedDive>
                    <Process t={t}></Process>
                </div>
            </div>
            <div className="relative w-full lg:p-16 p-3 bg-[url('/images/img33.jpg')] bg-no-repeat bg-center bg-cover my-2">
                <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
                <div className="flex flex-col items-center z-50">
                    <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>{t('contact.title')}</AnimatedDive>
                    <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-85'>{t('contact.lets_go')} <span className="text-secondary font-extrabold">{t('contact.here')} !</span></AnimatedDive>
                    <AnimatedDive className='text-lg mt-4 font-semibold opacity-85 w-[60%] text-center'>{t('contact.earn_money')}
                        {t('contact.you')} </AnimatedDive>
                    <AnimatedDive transition={{ duration: 1 }} className='text-lg mt-5 font-semibold opacity-85'>{t('contact.lets_go')} </AnimatedDive>
                    <Form t={t}></Form>
                </div>
            </div>
            <div className="relative w-full lg:p-16 p-3 flex flex-col items-center my-2 bg-tertiary">
                <div className="hidden lg:absolute lg:flex lg:-top-16 lg:left-36 -rotate-[20deg] opacity-55">
                    <AnimatedDive initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="h-32 w-9 bg-customgray mr-3"></AnimatedDive>
                    <AnimatedDive initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="h-32 w-9 bg-customgray"></AnimatedDive>
                </div>
                <AnimatedDive transition={{ duration: 0.7 }} className='text-base font-bold tracking-[0.25em] opacity-40 mb-3'>{t('comments.title')} </AnimatedDive>
                <AnimatedDive transition={{ duration: 0.8 }} className='text-4xl md:text-5xl tracking-wide opacity-55s'>{t('comments.said_about')} <span className="text-secondary font-extrabold">{t('common.app_name')}</span></AnimatedDive>
                <CarouselSection></CarouselSection>
            </div>
        </div >
    );
}