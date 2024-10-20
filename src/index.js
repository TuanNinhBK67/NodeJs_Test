const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

// http logger 
app.use(morgan('combined'))

// template engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resouces/views'));

//Routes init 
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
