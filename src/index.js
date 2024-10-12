const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

// http logger 
app.use(morgan('combined'))

// template engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resouces/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
