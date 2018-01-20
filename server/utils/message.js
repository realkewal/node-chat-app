const generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getDate()
    };
};

const generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com.au/maps?=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    }
};

module.exports = { generateMessage, generateLocationMessage };