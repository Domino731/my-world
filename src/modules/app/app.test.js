import {APP_SECTION_NAMES, APP_SECTIONS_ORDER} from "./App.const.js";

describe('Check if APP_SECTIONS_ORDER array contains all items from APP_SECTION_NAMES enum ', () => {
    it('contains all items from APP_SECTION_NAMES enum', () => {
        const enumValues = Object.values(APP_SECTION_NAMES);

        // Check if each enum value is present in APP_SECTIONS_ORDER
        enumValues.forEach((enumValue) => {
            expect(APP_SECTIONS_ORDER).toContain(enumValue);
        });

        // Check if APP_SECTIONS_ORDER has the same length as the enum
        expect(APP_SECTIONS_ORDER).toHaveLength(enumValues.length);
    });
})