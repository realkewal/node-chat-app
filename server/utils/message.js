const moment = require('moment');

const generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};

const generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com.au/maps?=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    }
};

module.exports = { generateMessage, generateLocationMessage }; 