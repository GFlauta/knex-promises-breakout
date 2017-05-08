const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
// const zebras = require('./routes/zebras');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/zebras', zebras);

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});
