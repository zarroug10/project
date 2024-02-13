// API Contacts
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extende: true }));
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://zarrougabdelhafidh:mynameishafa@cluster0.5mwcivt.mongodb.net/?retryWrites=true&w=majority");
const swaggerJSDoc = require('swagger-jsdoc');
   const swaggerUi = require('swagger-ui-express');
const db = mongoose.connection;
// Securiser les API
const jwt = require("jsonwebtoken");
// Clé secrète pour la création et la vérification des JWT
const secretKey = process.env.SECRET_KEY || "votreclésecrete"; // Utilisation d'une variable d'environnement


db.on("error", () => {
  console.log("Erreur de connexion à MongoDB :");
});
db.once("open", () => {
  console.log("Connecté à MongoDB");
});
const contactRouter= require('./Routers/Contact');
app.use('', contactRouter);

 // Définir les options Swagger
 const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de gestion de contacts',
      version: '1.0.0',
      description: 'Documentation de l\'API de gestion de contacts',
    },
  },
  apis: ['./Routers/*.js'], // Spécifiez le chemin des fichiers contenant les routes
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
// Utiliser Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(3000, () => {
  console.log(`the server is listening on 3000`);
});
