let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    let num1 = req.query.number1;
    let num2 = req.query.number2;
    let sum = parseInt(num1) + parseInt(num2);
    let obj = {statusCode:200, message:'success', data:sum}

    res.json(obj);
});


app.listen(3000, () => {
    console.log('server started - 2');
}); //this is the logic that will be fired upon the server start;


