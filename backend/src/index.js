const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/dbs-marketplace')
const productRouter = require('./routers/product')
const customerRouter = require('./routers/customer')
const categoryRouter = require('./routers/category')

const app = express()
const port = 3002

app.use(cors({origin: '*'}))
app.use(express.json())
app.use(productRouter)
app.use(customerRouter)
app.use(categoryRouter)

app.listen(port, () => console.log(`Server is up on port ${port}.`))

// C:\Users\jrado\mongodb\bin\mongod.exe --dbpath=C:\Users\jrado\Desktop\Hackwagon\"Udemy Course"\React\dbs_seed_marketplace\personal_dbs_seed\mongodb-data