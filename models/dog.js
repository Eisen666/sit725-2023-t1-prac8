const ObjectId = require('mongodb').ObjectId;

let client = require('../dbConnection');

let collection = client.db().collection('Dog');

function postDog(dog,callback){
    collection.insertOne(dog,callback);
}

function getAllDog(callback) {
  collection.find({}).toArray(callback);
}

function deleteDog(id, callback) {
  collection.deleteOne({ _id: new ObjectId(id) }, callback);
}

module.exports = {postDog,getAllDog, deleteDog};