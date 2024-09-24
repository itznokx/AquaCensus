const express = require('express');
const router = express.Router();
const coletaController = require('../controllers/coletaController');

router.get('/', coletaController.getAllColetas);
router.post('/createColeta', coletaController.createColeta);

module.exports = router;
