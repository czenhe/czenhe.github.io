import { derived, writable } from 'svelte/store';
import translations from '.';

export const locale = writable('ko');
export const locales = Object.keys(translations);

const translate = ({
	locale,
	key,
	vars
}: {
	locale: string;
	key: string;
	vars: { [key: string]: string };
}): string => {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	const langData = translations[locale];
	let text = langData[key];

	if (text === undefined) throw new Error(`no translation found for ${locale}.${key}`);

	Object.keys(vars).map((k: string) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
};

export const t = derived(
	locale,
	($locale) =>
		(key: string, vars = {}) =>
			translate({ locale: $locale, key, vars })
);
