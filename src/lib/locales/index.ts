import ko from './ko.json';
import ja from './ja.json';
import en from './en.json';

export interface translationsType {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: translationsType = {
  ko: ko,
  en: en,
  ja: ja
};
export default translations;
