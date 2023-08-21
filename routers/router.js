let express = require('express');
let router = express.Router();

app.post('/', (req,res)=>{
    //let dog = req.body;
    //postDog(dog, (err, result)=> {
        //if (err) {
          //res.json({ statusCode: 500, message: 'server error' });
        //} else {
          //res.json({ statusCode: 200, data: result, message: 'success' });
        //}
    //})
})

app.get('/', function (req, res) {
  //getAllDog((err, result) => {
    //if (!err) {
      //res.json({ statusCode: 200, data: result, message: 'success' })
    //}
  //});
})

module.exports = router;