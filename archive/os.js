const os = require ('os');
//Information sur le systeme 
console.log(`Total Memory:${(os.totalmem()/(1024*1024*1024)).toFixed(2)} GO`);
console.log(`Free Memory:${(os.freemem()/(1024*1024*1024)).toFixed(2)} GO`);