// CRUD create read update delete

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' // connect to the mongodb server URL
const databaseName = 'dbs-marketplace' // database name

const productsjson = require('../../frontend/src/jsondata/products.json')

MongoClient.connect(connectionURL, 
    { useNewUrlParser: true }, // second arg is an options object. compulsory to add useNewUrlParser: true because of some deprecation thingy
    (error, client) => { // third arg is callback fn that will be called when connected to db
        if (error) {
            return console.log('Unable to connect to database!')
        }
        const db = client.db(databaseName)
        
        // C - CREATE (products)
        db.collection('product').insertMany(productsjson, (error, result) => {
            if (error) {return console.log('Unable to insert products')}
             console.log(result)
        })

        // C - CREATE (products)
        db.collection('product').insertMany(, (error, result) => {
            if (error) {return console.log('Unable to insert products')}
             console.log(result)
        })

        // C - CREATE (products)
        db.collection('product').insertMany(, (error, result) => {
            if (error) {return console.log('Unable to insert products')}
             console.log(result)
        })

    }
)