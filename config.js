const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'HANSAMAL-MD=fJ8igLgZ#mB5bnFqRRqWcBz3Jtagf64h_ZvmMH1x8wQmJxrlZl4E',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'niko-pamiyaa' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94704020146' : process.env.OWNER_NUMBER
};
