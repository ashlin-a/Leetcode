"use strict";
function expect(val) {
    return {
        toBe(arg) {
            if (val === arg) {
                return true;
            }
            else if (val !== null) {
                throw new Error('Not Equal');
            }
            else if (val === null && (arg === false || arg === true)) {
                throw new Error('Not Equal');
            }
            return false;
        },
        notToBe(arg) {
            if (val === arg) {
                throw new Error('Equal');
            }
            else if (val !== null) {
                return true;
            }
            else if (val === null && (arg === false || arg === true)) {
                return true;
            }
            throw new Error('Not Equal');
        },
    };
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
