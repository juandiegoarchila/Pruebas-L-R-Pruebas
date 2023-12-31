// routes/Crud-Users.routes.js
const express = require('express');
const router = express.Router();
const CrudUsersController = require('../controllers/CrudUsersController');

router.get('/usuarios', CrudUsersController.indexUsuarios);
router.get('/usuarios/crear', CrudUsersController.formularioCrearUsuario);
router.post('/usuarios/crear', CrudUsersController.crearUsuario);
router.get('/usuarios/editar/:id', CrudUsersController.formularioEditarUsuario);
router.post('/usuarios/editar/:id', CrudUsersController.editarUsuario);
router.delete('/usuarios/eliminar/:id', CrudUsersController.eliminarUsuario);

router.get('/exportar-csv', CrudUsersController.exportarCSV);
router.get('/exportar-pdf', CrudUsersController.exportarPDF);
router.get('/exportar-excel', CrudUsersController.exportarExcel);

router.get('/previsualizar-pdf', CrudUsersController.previsualizarPDF);

module.exports = router;
