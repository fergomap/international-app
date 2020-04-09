import React, {useState} from 'react';
import './App.scss';
import {APP_CONSTANTS} from "./config/app.config";
import Language from "./model/language";
import {FormattedMessage, IntlProvider} from "react-intl";
import {i18n} from "./i18n/i18n";

function App() {
  const [ currentLanguage, setCurrentLanguage ] = useState(APP_CONSTANTS.LANGUAGES[0]);

    return <div className="app-component">
        <IntlProvider locale={currentLanguage.code} messages={Object.assign(i18n)[currentLanguage.code]}>
            <h1>React international app</h1>
            <div className="languages">
                { APP_CONSTANTS.LANGUAGES.map((language: Language, index: number) => {
                    return <span key={index} onClick={() => setCurrentLanguage(language)} className={`${currentLanguage === language && 'active'}`}>
                        { language.label }
                    </span>;
                }) }
            </div>
            <h1><FormattedMessage id="title"/></h1>
            <h3><FormattedMessage id="subtitle"/></h3>
        </IntlProvider>
    </div>;
}

export default App;
