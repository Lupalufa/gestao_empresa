const express = require('express')
const UsuarioController = require('../controllers/usuario.controller')
const AutenticacaoMiddleware = require('../../notebook/middleware/notebook.middleware')

const router = express.Router()

router.post('/cadastrar', UsuarioController.cadastrar)

router.get('/perfil', AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil)

module.exports = router