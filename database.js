const { MongoClient } = require('mongodb');

let db;

module.exports = () => {
    return MongoClient
        .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/research_guides')
        .then((client) => {
            db = client;
        })
};

module.exports.ResearchGuide = {
    clear() {
        return db.collection('research_guides').removeMany({});
    },

    create(data) {
        return db.collection('research_guides').insertOne(data, { w: 1 })
    },

    find_guides_with_name_containing(str) {
        return db.collection('research_guides').find({ name: { $regex: RegExp(str, 'i')}}).toArray()
    },

    populate(data) {
        return db.collection('research_guides').insertMany(data);
    },

    all() {
        return db.collection('research_guides').find().sort({ title: 1 }).toArray()
    }
};