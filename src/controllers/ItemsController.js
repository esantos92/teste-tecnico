const Comments = require('../model/Comments');
const datas = require('../model/Comments')

module.exports = {
  save(req, res) {      
      const lastId = datas[datas.length - 1]?.id || 1;
      const data = datas.get();
      
      Comments.create({
        id: lastId,
        comment:req.body.comment
      })    
    
      return res.redirect('/')
    }
  }