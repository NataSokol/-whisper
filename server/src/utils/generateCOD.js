
const util = require('util');
const crypto = require('crypto');
const randomBytesAsync = util.promisify(crypto.randomBytes);

async function generateToken() {
  try {
    const buffer = await randomBytesAsync(48);
    const token = buffer.toString('base64url');
    console.log('Generated token: ', token);
    return token;
  } catch (err) {
    console.error('An error occurred while generating a token: ', err);
  }
}

module.exports = generateToken