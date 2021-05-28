let datas = [
  {
    id: 1,
    comment: "Pai nosso que estais no céu"
  },
  
  {
    id: 2,
    comment:"Ave maria cheia de graça"
  }
];

module.exports= {
  comments(){
    return datas
  },

  create(newComment) {
    datas.push(newComment)
    
  }
}

