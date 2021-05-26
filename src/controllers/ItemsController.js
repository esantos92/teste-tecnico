const data = require('../model/data')

module.exports = {
  save(req, res) {

      
      const lastId = data[data.length - 1]?.id || 1;
    
      data.get().push({
        id: lastId,
        comment:req.body.comment
      })
    
      return res.redirect('/')
    }
  }