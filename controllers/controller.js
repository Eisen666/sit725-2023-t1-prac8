let collection = require('../models/dog');

const postDog = (req,res) => {
    let dog = req.body;
    collection.postDog(dog, (err, result)=> {
        if (err) {
          res.json({ statusCode: 500, message: 'server error' });
        } else {
          res.json({ statusCode: 200, data: result, message: 'success' });
        }
    })
}

const getAllDog =(req,res) => {
    collection.getAllDog((err,result)=>{
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' })
          }
    });
}

const deleteDog = (req, res) => {
  let id = req.params.id;
  collection.deleteDog(id, (err, result) =>{
    if (err) {
      res.json({statusCode: 500, message: 'server error'});
    } else {
      res.json({statusCode: 200, data: result, message: 'success'});
    }
  })
}
module.exports = {postDog,getAllDog}
