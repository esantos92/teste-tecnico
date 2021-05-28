const express = require('express')
const routes = express.Router()
const ItemsController = require('./controllers/ItemsController')
const data = require('./model/Comments')

routes.get('/', ItemsController.renderAll)
routes.get('/index', (req, res) => res.redirect('/'))
routes.post('/', ItemsController.save )




// render all comments
routes.get('/comments', (req, res) => {
  return res.json( data.comments() )
})


// save comments
routes.post('/comments', (req, res) => {
  const { comment } = {"id":req.body, "comment":req.body} 
  data.comments().push (comment)
  return res.json(data.comments())

})

module.exports = routes;