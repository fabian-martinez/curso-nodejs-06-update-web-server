const express = require('express')
const hbs = require('hbs')

require('dotenv').config();

const app = express()
const port = process.env.PORT

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Server static content
app.use( express.static('public'))

//set view engine
app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render('home',{
      name: 'Curso Nodejs',
      author: 'Fabian Martinez'
  })
})

app.get('/generic', function (req, res) {
    res.render('generic',{
        name: 'Curso Nodejs',
        author: 'Fabian Martinez',
        title: 'Generic'
    })
})

app.get('/elements', function (req, res) {
    res.render('elements',{
        name: 'Curso Nodejs',
        author: 'Fabian Martinez',
        title: 'Elements'
    })
})
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})