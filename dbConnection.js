const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://zjlai0321:flawless2015@cluster0.firh69g.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


client.connect();

module.exports = client;
