const express = require('express');
const router = express.Router();

const controller = require('../Controllers/ContactController');
//Route Liste: Get Post Put Delete
router.get('/contact/Lister',controller.listerContact);
router.post('/login',controller.loginContact);
/**
 * @swagger
 * /contact/ajouter:
 *   post:
 *     summary: Ajouter un contact
 *     description: Ajoute un nouveau contact à la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               tel:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact ajouté avec succès
 *         content:
 *           application/json:
 *             example:
 *               message: "Contact ajouté avec succès."
 *               contact:
 *                 nom: "John Doe"
 *                 tel: "1234567890"
 *                 _id: "65c8172b59a0181f65224090"
 *                 createdAt: "2024-02-11T00:39:07.910Z"
 *                 updatedAt: "2024-02-11T00:39:07.910Z"
 *                 __v: 0
 *       400:
 *         description: Les données requises ne sont pas fournies
 *         content:
 *           application/json:
 *             example:
 *               message: "Le nom et le téléphone sont requis."
 *       500:
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               message: "Erreur interne du serveur."
 */
router.post('/contact/ajouter',controller.createUser);
/**
 * @swagger
  * /contact/{id}/modifier:
 *      put:
 *       summary: Modifier un contact
 *       description: Modifie les informations d'un contact dans la base de données.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID du contact à modifier
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nom:
 *                   type: string
 *                 tel:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Opération réussie
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                   message:
 *                     type: string
 *         '404':
 *           description: Contact non trouvé
 *         '400':
 *           description: Données requises non fournies
 *           content:
 *             application/json:
 *               example:
 *                 message: "Le nom et le téléphone sont requis pour la modification."
 *         '500':
 *           description: Erreur interne du serveur
 *           content:
 *             application/json:
 *               example:
 *                 message: "Erreur interne du serveur."

 */
router.put('/contact/:id/modifier',controller.UpdateUser);
/**
 * @swagger
* /contact/{id}/supprimer:
 *      delete:
 *       summary: Supprimer un contact
 *       description: Supprime un contact de la base de données en utilisant son ID.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: ID du contact à supprimer
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Contact supprimé avec succès
 *           content:
 *             application/json:
 *               example:
 *                 success: true
 *                 message: "Contact supprimé avec succès."
 *         '404':
 *           description: Contact non trouvé
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Aucun contact trouvé avec cet ID."
 *         '500':
 *           description: Erreur interne du serveur
 *           content:
 *             application/json:
 *               example:
 *                 success: false
 *                 message: "Erreur interne du serveur."
 */
router.delete('/contact/:id/supprimer',controller.DeleteUser);
/**
 * @swagger
* /contact/rechercher:
*      get:
*       summary: Chercher des contacts
*       description: Recherche des contacts dans la base de données en fonction du nom ou du numéro de téléphone.
*       parameters:
*         - in: query
*           name: nom
*           required: false
*           description: Nom du contact à rechercher
*           schema:
*             type: string
*         - in: query
*           name: tel
*           required: false
*           description: Numéro de téléphone du contact à rechercher
*           schema:
*             type: string
*       responses:
*         '200':
*           description: Opération réussie
*           content:
*             application/json:
*               schema:
*                 type: array
*         '400':
*           description: Données requises non fournies
*           content:
*             application/json:
*               example:
*                 message: "Le nom ou le numéro de téléphone est requis pour la recherche."
*         '500':
*           description: Erreur interne du serveur
*           content:
*             application/json:
*               example:
*                 message: "Erreur interne du serveur."
*/
router.get('/contact/rechercher',controller.findUser);


module.exports= router;