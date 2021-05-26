const express = require('express')
const routes = express.Router()
const ItemsController = require('./controllers/ItemsController')
const data = require('./model/data')

routes.get('/', (req, res) => res.render("index", { data: data.get() }))
routes.get('/index', (req, res) => res.redirect('/'))
routes.post('/', ItemsController.save )

module.exports = routes;