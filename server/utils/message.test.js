const expect = require('expect');
const {generateMessage} = require('./message');

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