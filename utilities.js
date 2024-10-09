/* eslint-disable no-unused-vars */

export function getType(thing) {
    return typeof thing
}

export function isNumber(thing) {
    return typeof thing === 'number';
}

export function toNumber(str) {
    return Number(str)
}

export function isStringNumber(str) {
    return typeof str === 'string' && !isNaN(str)
    // return typeof(str) === String ? true : false;
}

export function sum(a, b) {
    return a+b
}

export function addStrings(a, b) {
    // return 
}

export function addNumbersOrStrings(a, b) {
    if((typeof a === 'number') && (typeof b === 'number')){
        return a + b;
    } else {
        let sum =  Number(a) + Number(b)
        return String(sum)
    }
}

export function hasComma(str) {
    return str.includes(',')
}

export function splitStringByCommas(str) {}

export function isEmail(str) {}

export function countIf(array, fn) {}
