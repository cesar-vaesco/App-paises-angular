/** Interfaz generada de la petición get a: https://restcountries.eu/rest/v2/name/me */
/** La respuesta es usada para generar la interfaz en la pag https://app.quicktype.io/ */
/** Para que la interfaz sea creada en el lenguaje requerido hay que especificarlo en la interfaz grafica de la página web */

export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number | null;
    gini: number | null;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
}

export interface Currency {
    code: string;
    name: string;
    symbol: null | string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherAcronyms: string[];
    otherNames: string[];
}

export interface Translations {
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    br: string;
    pt: string;
    nl: string;
    hr: null | string;
    fa: string;
}
