import opening_hours_resources from './opening_hours_resources.yaml';

import Polyglot from 'node-polyglot';
var i18n = new Polyglot({
    interpolation: {
        prefix: '__',
        suffix: '__'
    }
});
i18n.setLocale = function(locale) {
    i18n.locale(locale);
    i18n.replace(opening_hours_resources[locale]['opening_hours']);
};
i18n.setLocale('en');
export default i18n;
