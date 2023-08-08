let express = require('express');
let app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');

const uri = "mongodb+srv://zjlai0321:flawless2015@cluster0.firh69g.mongodb.net/?retryWrites=true&w=majority";
let port = process.env.PORT || 3000;
let collection;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runDB() {
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    collection = client.db().collection('Dog');
    console.log(collection);
  } catch(ex) {
    console.error(ex)
  }
}


app.get('/', function(req,res) {
    res.render('index.html');
});


app.post('/api/dog', (req,res)=>{
    let dog = req.body;
    postDog(dog, (err, result)=> {
        if (err) {
          res.json({ statusCode: 500, message: 'server error' });
        } else {
          res.json({ statusCode: 200, data: result, message: 'success' });
        }
    })
})

app.get('/api/dog', function (req, res) {
  getAllDog((err, result) => {
    if (!err) {
      res.json({ statusCode: 200, data: result, message: 'success' })
    }
  });
})

function postDog(dog,callback){
    collection.insertOne(dog,callback);
}

function getAllDog(callback) {
  collection.find({}).toArray(callback);
}



app.listen(3000, () => {
    console.log('server started - 2');
    runDB(); 

}) //this is the logic that will be fired upon the server start;


