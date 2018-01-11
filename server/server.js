const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')

require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(error => {
    console.log('error', error)
})

app.post('/login', (req, res) => {
    res.json({
        user: { name: 'bob again' }
    })
})

const PORT = process.env.SERVER_PORT || 3035
app.listen(PORT, () => console.log(`listening on port ${PORT}`))