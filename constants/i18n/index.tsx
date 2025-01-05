import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./resources/en.json";
import me from "./resources/me.json";
import { getLocales, getCalendars } from "expo-localization";
const resources = {
  en: { translation: en },
  me: { translation: me },
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback: (lang: string) => void) => {
    const locales = getLocales();
    callback(locales[0]?.languageTag || "en");
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
