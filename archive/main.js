// const mathOperation = require('./mathOperation');
// const Calculedage = require('./Calculedage');

// const resultAdd = mathOperation.add(3,6);
// const resultMultiply = mathOperation.multiply(3,6);
// const resultage = Calculedage.age(2000);

// console.log('Addition :', resultAdd);
// console.log('Multiplication :', resultMultiply);
// console.log('votre age est :', resultage);

// const express = require("express");
// const app = express();
// const userController = require('./Controllers/userController');
// var port = 3000;

// app.get("/user", (req, res) => {
//    const user = userController.getUser();
//    res.json(user)
//   });

//   app.listen(3000, () => {
//     console.log(`the server is listening on ${port}`);
//   });

const { getWeather } = require('./weather'); 
 
const city = 'Tunis'; 
getWeather(city) 
  .then(weatherData => { 
    console.log('Informations météorologiques pour', city, ':', weatherData); 
  });