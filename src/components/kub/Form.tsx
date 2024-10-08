import LangProps from "@/src/props/LangProps";
import AnimatedDive from "../common/AnimatedDive";

const Form: React.FC<LangProps> = ({ t }) => {
    return (
        <AnimatedDive className="lg:w-[70%] w-full opacity-95 m-3">
            <select name="civility" className="bg-secondary w-full outline-none h-10 text-white px-4">
                <option className="text-white hover:bg-primary" key="civilité">{t('contact.form.civility')}</option>
                <option className="text-white hover:bg-primary" key="Location">{t('contact.form.maried')}</option>
                <option className="text-white hover:bg-primary" value="2" key="Célibataire">{t('contact.form.bachelor')}</option>
                <option className="text-white hover:bg-primary" value="3" key="Veuve">{t('contact.form.widow')}</option>
                <option className="text-white hover:bg-primary" value="4" key="Common-law spouse">{t('contact.form.common_law_spouse')}</option>
            </select>
            <div className="flex justify-between mt-2">
                <input type="text" name="first_name" id="" className="bg-secondary w-[49%] h-10 text-white px-4 outline-none" placeholder={t('contact.form.first_name')} />
                <input type="text" name="last_name" id="" className="bg-secondary w-[49%] h-10 text-white px-4 outline-none" placeholder={t('contact.form.last_name')} />
            </div>
            <div className="flex justify-between mt-2">
                <input type="text" name="phone" id="" className="bg-secondary w-[49%] h-10 text-white px-4 outline-none" placeholder={t('contact.form.phone')} />
                <input type="text" name="email" id="" className="bg-secondary w-[49%] h-10 text-white px-4 outline-none" placeholder={t('contact.form.email')} />
            </div>
            <div className="flex justify-between mt-2">
                <select name="car_brand" className="bg-secondary w-[49%] outline-none h-10 text-white px-4">
                    <option className="text-white hover:bg-primary" key="civilité">{t('contact.form.car_brand')}</option>
                    <option className="text-white hover:bg-primary" key="Toyota">Toyota</option>
                    <option className="text-white hover:bg-primary" value="2" key="VMW">VMW</option>
                    <option className="text-white hover:bg-primary" value="3" key="Rolls-Royce">Rolls-Royce</option>
                    <option className="text-white hover:bg-primary" value="4" key="Citroën">Citroën</option>
                </select>  <select name="civility" className="bg-secondary outline-none h-10 text-white px-4 w-[49%]">
                    <option className="text-white hover:bg-primary" key="civilité">{t('contact.form.gain_option')}</option>
                    <option className="text-white hover:bg-primary" key="Marié">Location</option>
                    <option className="text-white hover:bg-primary" value="2" key="Transport">Transport</option>
                    <option className="text-white hover:bg-primary" value="3" key="Vente-directe">Vente directe</option>
                    <option className="text-white hover:bg-primary" value="4" key="Autres">{t('common.others')}</option>
                </select>
            </div>
            <div className="flex justify-center mt-4">
                <div className="text-white border p-2 border-white bg-secondary hover:bg-white hover:text-primary hover:cursor-pointer">{t('common.book_now')}</div>
            </div>
        </AnimatedDive>
    );
};

export default Form;
