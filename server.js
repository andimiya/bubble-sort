const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bubble = require('./routes/bubble')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', bubble);

app.listen(PORT, () => {
  console.log('server listening on', PORT);
});

module.exports = app;