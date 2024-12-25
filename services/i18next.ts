import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ru  from "../locales/ru.json";
import en  from "../locales/en.json";

const langResources = {
    ru: {
        translation: ru
    },
    en: {
        translation: en
    }
}

i18next.use(initReactI18next).init({
    interpolation: {
        escapeValue: false
    },
    lng: "ru",
    fallbackLng: "ru",
    resources: langResources 
});

export default i18next;