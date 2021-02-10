/*
MIT License

Copyright (c) 2021 William Herrera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const BASE16 = "0123456789abcdef";
const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function _split(str, size) {
    var c = [], l = str.length;
    for (var i = 0; i < l; i += size) {
        c.push(str.substring(i, i + size));
    }
    return c;
}
function FromAlpha (hex, alphabet) {
    let num = 0;
    let base = alphabet.length;
    for(let i=0; i < hex.length; i++) {
        let index = alphabet.indexOf(hex[i])
        num += Math.pow(base,i) * index;
    }
    return num;
}
function ToAlpha(num,alphabet,digits) {
    const base = alphabet.length;
    let str = "";
    for(let i=0; i < digits; i++) {
        str += alphabet[num % base];
        num = Math.floor(num / base);
    }
    return str;
}
function encode (uuid) {
    let str = uuid.replace(/-/g,'');
    let _parts = _split(str, 4);
    let encoded = "";
    _parts.forEach(part => {
        encoded += ToAlpha(FromAlpha(part, BASE16), BASE62, 3);
    });
    return encoded;
}
function decode (base62_uuid) {
    let _parts = _split(base62_uuid, 3);
    let decoded = "";
    _parts.forEach(part => {
        decoded += ToAlpha(FromAlpha(part,BASE62), BASE16, 4);
    });
    return decoded;
}
module.exports = {
    encode,
    decode
}