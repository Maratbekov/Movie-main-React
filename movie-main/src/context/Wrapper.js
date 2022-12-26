import React, {useState} from 'react';
import {LanguageContext} from "./LanguageContext";

const Wrapper = ({children}) => {

    const [language, setLanguage] = useState("ru-RU")
    console.log(language)
    return (
        <LanguageContext.Provider
            value={{ language, setLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export default Wrapper;