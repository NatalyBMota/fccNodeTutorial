const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
// app.use(logger)
// app.use('/api', logger)
// app.use([logger, authorize])

// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
    res.end()
})
app.get('/about', (req, res) => {
    res.send('About')
    res.end()
})
app.get('/api/products', (req, res) => {
    res.send('Products')
    res.end()
})
/* 
app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user)
    res.send('Items')
    res.end()
}) */
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
    res.end()
})

app.listen(5000, (req, res) => {
    console.log('server is listening')
})