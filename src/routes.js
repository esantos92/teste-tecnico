const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const data = [
  {
    id: 1,
    comment: "Pai nosso que estais no céu"
  },

  {
    id: 2,
    comment:"Ave maria cheia de graça"
  }
]



routes.get('/', (req, res) => res.render(views + "index", { data }))
routes.get('/index', (req, res) => res.redirect('/'))
routes.post('/', (req, res) => {

  //comment: 'teste'
  const lastId = data[data.length - 1]?.id || 1;

  data.push({
    id: lastId,
    comment:req.body.comment
  })

  return res.redirect('/')
})

module.exports = routes;