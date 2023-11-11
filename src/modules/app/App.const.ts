export enum APP_SECTION_NAMES {
    CYBERPUNK = "CYBERPUNK",
    MODERN = "MODERN",
    BORING = "BORING",
    ERROR = "ERROR"
}

export type AppSectionNamesUnion = keyof typeof APP_SECTION_NAMES;

export const APP_SECTIONS_ORDER: Array<AppSectionNamesUnion> = [
    APP_SECTION_NAMES.CYBERPUNK,
    APP_SECTION_NAMES.MODERN,
    APP_SECTION_NAMES.BORING,
    APP_SECTION_NAMES.ERROR
];