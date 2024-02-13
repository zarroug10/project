const crypto = require ('crypto');
//generation d'un hechage
const hash = crypto.createHash('sha256');
hash.update('Hello,Crypto!');
console.log(hash.digest('hex'));