import Language from "./language";

export default class LanguageImp implements Language {
    label: string;
    code: string;

    constructor(label: string = '', code: string = '') {
        this.label = label;
        this.code = code;
    }
}
