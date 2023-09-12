const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home',{
    titulo: 'Curso de Node'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    titulo: 'Curso de Node'
  });
  })

app.get('/generic', (req, res) => {
  res.render('generic',{
    titulo: 'Curso de Node'
  });
  })

app.listen(port, () => {
    console.log('Servidor en el puerto ', port)
})