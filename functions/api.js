const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const Home = require('../routers/home')
const User = require('../routers/user')
const expressLayout = require('express-ejs-layouts')
const serverless = require('serverless-http')
const router = express.Router()

// //alternatif 1
// app.use(express.json())
// app.use(exrpess.urlencoded({extended:true}))

//layout
app.use(expressLayout)

//alternatif 2
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//views
app.set('views','./views') //default
app.set('view engine', 'ejs')


//halaman home
app.use('/',[Home,User])

//halaman data 
// app.use('/',User)


// //listen port
// app.listen(port, () => {
//     console.log(`Server started on port 3000`);
// });

module.exports.handler = serverless(app)