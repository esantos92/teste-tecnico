const Comments = require('../model/Comments');
const datas = require('../model/Comments')

module.exports = {
  renderAll(req, res) {
    res.render("index", { data: datas.comments() })
    return res.json( datas.comments() )
  },





  save(req, res) {      
      const lastId = datas[datas.length - 1]?.id || 1;
      
      
      Comments.create({
        id: lastId,
        comment:req.body.comment
      })

      res.render("index", { data: datas.comments() })
      return res.json( datas.comments() )

      /*res.json(datas.comments())   
    
      return res.redirect('/')*/
    }
  }