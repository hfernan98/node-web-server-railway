const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

// Configurar Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// Rutas dinámicas primero

app.get('/', (req,res) => {
  res.render('home', { // estos son los argumentos
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
      nombre: 'Armando David',
      titulo: 'Curso de Node'
    })
  });

app.get('/generic', (req, res) => {
    res.render('generic', {
      nombre: 'Armando David',
      titulo: 'Curso de Node'
    })
  });

// Luego los archivos estáticos
app.use(express.static('public'));

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)

})