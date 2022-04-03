const MongoClient = require('mongodb').MongoClient;
let _db;

const mongoConnect = async (callback) => {
    await MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        _db = client.db('babyEquipmentRental');
        callback();
    })
}

const getDB = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error('DB connect failed');
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
