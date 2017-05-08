const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('songs').then(songs => res.send(songs));
});

router.get('/:id', (req, res) => {
  knex('songs').where('id', req.params.id).then(song => res.send(song));
});

router.post('/', (req, res) => {
  knex('songs').insert(req.body).returning('*').then(song => res.status(201).send(song));
});

router.put('/:id', (req, res) => {
  knex('songs').where('id', req.params.id).update(req.body, 'id').then(id => res.send(`Updated song ${id}`));
});

router.delete('/:id', (req, res) => {
  knex('songs').where('id', req.params.id).del().returning('id').then(id => res.send(`Deleted song ${id}`));
});

module.exports = router;
