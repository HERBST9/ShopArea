if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

// REQUIRES //

const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const shopRouter = require('./routes/index')

// MONGOOSE CONNECT //

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// APP.USE & SET //

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))
 
// ROUTER //

app.use('/shop', shopRouter)


// APP.LISTEN //

app.listen(process.env.PORT || 3000, (req,res ) => {
    console.log(" LISTENING ............")

})