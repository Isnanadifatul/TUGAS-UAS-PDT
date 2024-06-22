const { MongoClient } = require('mongodb');

const mongoUri = 'mongodb://mongodb:27017/mydatabase';
let mongoClient;

async function connectMongo() {
  try {
    mongoClient = new MongoClient(mongoUri);
    await mongoClient.connect();
    console.log('MongoDB Connected!');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
  }
}

connectMongo();

module.exports = mongoClient;
