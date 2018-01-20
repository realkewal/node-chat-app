const expect = require('expect');
const { generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Kewal';
        const message = 'Hello from the other side!'
        const res = generateMessage(from, message);
        expect(res.from).toBe(from);
        expect(res.text).toBe(message);
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Kewal';
        const latitude = "89.079034725";
        const longitude = "-32.490234";
        const location = generateLocationMessage(from, latitude, longitude);
        expect(location.from).toBe(from);
        expect(location.url).toBe(`https://www.google.com.au/maps?=${latitude},${longitude}`);
        expect(typeof location.createdAt).toBe('number');
    });
});