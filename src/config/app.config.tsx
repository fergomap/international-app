import Language from "../model/language";
import LanguageImp from "../model/language.imp";

interface AppConfig {
    LANGUAGES: Language[];
}

export const APP_CONSTANTS: AppConfig = {
    LANGUAGES: [
        new LanguageImp('Español', 'es'),
        new LanguageImp('English', 'en')
    ]
};
