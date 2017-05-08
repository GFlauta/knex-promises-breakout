const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const artists = require('./routes/artists');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/artists', artists);

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});
