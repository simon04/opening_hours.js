import de from './de.yaml';
import en from './en.yaml';
import fr from './fr.yaml';
var translations = {
    de: de,
    en: en,
    fr: fr
};

/* Translation function {{{ */
/* Roughly compatibly to i18next so we can replace everything by i18next include later
 * sprintf support
 */
var locale = 'en';

export function lng() {
    return locale;
}

export function setLng(lng) {
    locale = lng;
}

export function t(str, variables) {
    var text = translations[locale][str];
    if (typeof text === 'undefined') {
        text = str;
    }
    return text.replace(/__([^_]*)__/g, function (match, c) {
        return typeof variables[c] !== 'undefined'
            ? variables[c]
            : match;
        }
    );
}
/* }}} */
