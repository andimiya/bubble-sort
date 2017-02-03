const express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;
const bubble = require('./routes/bubble');

app.route('/', bubble);

app.listen(PORT, () => {
  console.log('server listening on', PORT);
});
