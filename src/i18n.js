// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome',
    // other translations...
  },
  fr: {
    welcome: 'Bienvenue',
    // other translations...
  },
  // Add more languages here...
};

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;
