require("dotenv").config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;;


//require('hbs')
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//  Servir contenido estático
app.use(express.static("public"));


app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Baruk Ramos',
    titulo: 'Curso de Node'
  });

});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Baruk Ramos',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Baruk Ramos',
    titulo: 'Curso de Node'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    nombre: 'Baruk Ramos',
    titulo: 'Curso de Node'
  });
});

app.get('/hola-mundo', (req, res) => {
  res.send('Hello World1')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})