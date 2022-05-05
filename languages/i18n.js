import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './english.json';
import russian from './russian.json';


i18next.use(initReactI18next).init({
    lng: 'ru',
    resources: {
        en: english,
        ru: russian
    },
    react: {
        useSuspense: true
    }
});
export default i18next;