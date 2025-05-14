const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI || 'mongodb://admin:admin123@mongo:27017';

const client = new MongoClient(uri);

async function connect() {
  if (!client.isConnected) {
    await client.connect();
  }
  return client.db('appdb');
}

module.exports = connect;
