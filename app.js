const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const artists = require('./routes/artists');
const albums = require('./routes/albums');
const songs = require('./routes/songs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/artists', artists);
app.use('/albums', albums);
app.use('/songs', songs);

app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});
