const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const d3 = require('d3');
const bubble = require('./routes/bubble');
const insertion = require('./routes/insertion');
const selection = require('./routes/selection');
const quick = require('./routes/quick');
const merge = require('./routes/merge');
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', bubble);
app.use('/', insertion);
app.use('/', selection);
app.use('/', quick);
app.use('/', merge);


app.listen(PORT, () => {
  console.log('server listening on', PORT);
});

module.exports = app;