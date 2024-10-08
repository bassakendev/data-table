"use client";

import { useI18n } from "@/src/locales/client";

const Footer: React.FC = () => {
    const t = useI18n()

    return (
        <footer className="mt-auto text-white text-sm pt-8 pb-10 flex justify-around h-14 bg-secondary">
            <div>© {t('common.all_rights')}</div>
            <div className="flex justify-evenly w-96">
                <div className="hover:text-primary hover:cursor-pointer">{t('common.about')}</div>
                <div className="hover:text-primary hover:cursor-pointer">{t('common.privacy_policy')}</div>
            </div>
        </footer>
    );
};

export default Footer;
